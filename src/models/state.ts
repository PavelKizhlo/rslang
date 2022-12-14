import { StateType, WordData } from '../interfaces/interfaces';
import currentUser from './currentUser';

const State: StateType = {
    currentUserID: currentUser.userId,
    games: {
        audiocall: {
            learnedwords: 0,
            rightAnswers: 0,
            wrongAnswers: 0,
            rightAnswersSession: 0,
        },
        sprint: {
            learnedwords: 0,
            rightAnswers: 0,
            wrongAnswers: 0,
            rightAnswersSession: 0,
        },
    },
    selectedLevel: -1,
    wordsForGame: <WordData[]>[],
    theme: '',
};

export default State;
