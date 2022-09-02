import { StatisticsData, UserWordData, WordData } from '../../interfaces/interfaces';
import UserStat from '../../api/usersStat';
import GameStatisticview from '../../views/components/games/gameStatisticSection/gameStatistic';
import StatisticAll from '../../views/components/statistic/headingSection/statistic';
import getAnotherWord from '../../utils/getAnotherElement';
import currentUser from '../../models/currentUser';
import shuffle from '../../utils/shuffle';
import Game from './game';

type WordPair = Array<[Pick<WordData, 'word' | 'id'> & { correct: boolean }, string]>;

export default class Sprint extends Game {
    currentQuestion: number;

    allPairs: WordPair | undefined;

    userStatistic: StatisticAll;

    userStatsAPI: UserStat;

    learnedWords: UserWordData[] | undefined;

    constructor() {
        super();
        this.gameType = 'sprint';
        this.currentQuestion = 0;
        this.userStatistic = new StatisticAll();
        this.userStatsAPI = new UserStat();
    }

    async startGame() {
        await super.startGame();
        this.startTimer();
        this.createPairs();
        await this.askQuestion();
        this.handleAnswerClick();
        this.handleAnswerKeys();
    }

    async endGame() {
        window.removeEventListener('keydown', this.keyboardListener);
        const results = new GameStatisticview(<WordData[]>this.words, this.rightAnswers, this.wrongAnswers);

        if (this.rightAnswersSession < this.currentAnswersSession) {
            this.rightAnswersSession = this.currentAnswersSession;
        }

        results.render();

        if (currentUser.userId) {
            await this.updateStatistic();
        }
    }

    startTimer() {
        const timerContainer = <HTMLDivElement>document.getElementById('timer');
        const endGame = this.endGame.bind(this);
        let timeLeft = 60;

        setTimeout(async function start() {
            if (timeLeft >= 0) {
                if (timeLeft > 45) timerContainer.classList.add('much-time');
                if (timeLeft < 45 && timeLeft > 15) {
                    timerContainer.classList.remove('much-time');
                    timerContainer.classList.add('middle-time');
                }
                if (timeLeft < 15) {
                    timerContainer.classList.remove('middle-time');
                    timerContainer.classList.add('little-time');
                }
                timerContainer.textContent = String(timeLeft);
                timeLeft -= 1;
                setTimeout(start, 1000);
            } else {
                await endGame();
            }
        }, 1000);
    }

    handleAnswer(answer: boolean) {
        if (answer === (<WordPair>this.allPairs)[this.currentQuestion][0].correct) {
            this.highlightQuestion(this.currentQuestion, true);
            this.rightAnswers.push(this.currentQuestion);
            this.currentAnswersSession += 1;
            this.currentQuestion += 1;
            return true;
        }
        this.highlightQuestion(this.currentQuestion, false);
        this.wrongAnswers.push(this.currentQuestion);
        this.currentAnswersSession = 0;
        this.currentQuestion += 1;
        return false;
    }

    async handleAnswerView(isRight: boolean, buttonId: string) {
        const clickedButton = <HTMLButtonElement>document.getElementById(buttonId);
        if (isRight) {
            clickedButton.classList.add('right');
            await Promise.resolve(
                setTimeout(() => {
                    clickedButton.classList.remove('right');
                }, 200)
            );
            await this.askQuestion();
        } else {
            clickedButton.classList.add('wrong');
            await Promise.resolve(
                setTimeout(() => {
                    clickedButton.classList.remove('wrong');
                }, 200)
            );
            await this.askQuestion();
        }
    }

    handleAnswerClick() {
        const buttonRight = <HTMLButtonElement>document.getElementById('sprint-true');
        const buttonWrong = <HTMLButtonElement>document.getElementById('sprint-false');
        buttonRight.addEventListener('click', async () => {
            await this.handleAnswerView(this.handleAnswer(true), buttonRight.id);
        });
        buttonWrong.addEventListener('click', async () => {
            await this.handleAnswerView(this.handleAnswer(false), buttonWrong.id);
        });
    }

    handleAnswerKeys() {
        window.addEventListener('keydown', this.keyboardListener);
    }

    keyboardListener = async (evt: KeyboardEvent) => {
        switch (evt.code) {
            case 'ArrowLeft':
                await this.handleAnswerView(this.handleAnswer(true), 'sprint-true');
                break;
            case 'ArrowRight':
                await this.handleAnswerView(this.handleAnswer(false), 'sprint-false');
                break;
            default:
                break;
        }
    };

    highlightQuestion(index: number, isRight: boolean) {
        const progressPoints = document.querySelectorAll('.progress-point');
        const point = progressPoints[index];
        point.classList.add(isRight ? 'right' : 'wrong');
    }

    async askQuestion() {
        if (this.currentQuestion <= 19) {
            const wordWrapper = <HTMLDivElement>document.querySelector('.word_wrapper');

            wordWrapper.textContent = `
              ${(<WordPair>this.allPairs)[this.currentQuestion][0].word} - 
              ${(<WordPair>this.allPairs)[this.currentQuestion][1]}
            `;
        } else {
            await this.endGame();
        }
    }

    createPairs() {
        const rightPairs = <WordPair>(
            this.words
                ?.slice(0, 10)
                .map((wordData) => [{ word: wordData.word, id: wordData.id, correct: true }, wordData.wordTranslate])
        );

        const wrongPairs = <WordPair>this.words?.slice(10).map((wordData, index, arr) => {
            const otherWordData = getAnotherWord(arr, index);
            return [{ word: wordData.word, id: wordData.id, correct: false }, otherWordData.wordTranslate];
        });

        this.allPairs = shuffle([...rightPairs, ...wrongPairs]);
        this.words = <Array<WordData>>this.allPairs.map((pair) => this.words?.find((word) => word.id === pair[0].id));
    }

    async updateStatistic() {
        const currentDay = new Date().toLocaleDateString('en-US');
        const currentStatistic = <StatisticsData>await this.userStatistic.getTodayResults();
        let session;
        if (
            (currentStatistic &&
                (this.rightAnswersSession > <number>currentStatistic.optional.sprintSession ||
                    <undefined>currentStatistic.optional.sprintSession)) ||
            !currentStatistic
        ) {
            session = this.rightAnswersSession;
        } else {
            session = <number>currentStatistic.optional.sprintSession;
        }

        let stat;
        if (currentStatistic) {
            stat = {
                learnedWords: currentStatistic.learnedWords + (<WordData[]>this.words).length,
                optional: {
                    day: currentDay,
                    sprintLearnedWords:
                        <number>currentStatistic.optional.sprintLearnedWords + (<WordData[]>this.words).length,
                    sprintRightAnswers: <number>currentStatistic.optional.sprintRightAnswers + this.rightAnswers.length,
                    sprintWrongAnswers: <number>currentStatistic.optional.sprintWrongAnswers + this.wrongAnswers.length,
                    sprintSession: session,
                },
            };
        } else {
            stat = {
                learnedWords: (<UserWordData[]>this.learnedWords).length,
                optional: {
                    day: currentDay,
                    sprintLearnedWords: (<UserWordData[]>this.learnedWords).length,
                    sprintRightAnswers: this.rightAnswers.length,
                    sprintWrongAnswers: this.wrongAnswers.length,
                    sprintSession: session,
                },
            };
        }
        await this.userStatsAPI.upsertStatistics(currentUser.userId, stat, currentUser.token);
    }
}
