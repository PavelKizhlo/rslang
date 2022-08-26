/* eslint-disable @typescript-eslint/no-floating-promises */
import { WordData } from '../../interfaces/interfaces';
import '../../views/components/dictionary/card/card.sass';
import DictionaryCard from '../../views/pages/dictionary-card/dictionatyCard';

let page = 0;
const link = 'https://rs-lang-kdz.herokuapp.com';

export const mapper: Record<string, [string, string]> = {
    A1: ['A1', 'Elementary 0-600 слов'],
    A2: ['A2', 'Pre-Intermediate 601-1200 слов'],
    B1: ['B1', 'Intermediate 1201-1800 слов'],
    B2: ['B2', 'Upper-Intermediate 1801-2400 слов'],
    C1: ['C1', 'Advanced 2401- 3000 слов'],
    C2: ['C2', 'Proficiency 3001-3600 слов'],
};

let levelDictionary: [string, string];

export default class DictionaryDevelopments {
    cards!: WordData[];

    levels() {
        const container = <HTMLElement>document.getElementById('levels__container');

        container.addEventListener('click', async (e) => {
            const event = <HTMLElement>e.target;
            const level = event.classList.value;
            levelDictionary = mapper[level];
            const dictionaryCard = new DictionaryCard(levelDictionary, page);
            await dictionaryCard.render();
        });
    }

    next() {
        const next = <HTMLElement>document.getElementById('next');

        next.addEventListener('click', async () => {
            if (page < 29) {
                page += 1;
                const dictionaryCard = new DictionaryCard(levelDictionary, page);
                await dictionaryCard.render();
            }
        });
    }

    back() {
        const back = <HTMLElement>document.getElementById('back');

        back.addEventListener('click', async () => {
            if (page > 0) {
                page -= 1;
                const dictionaryCard = new DictionaryCard(levelDictionary, page);
                await dictionaryCard.render();
            }
        });
    }

    fullNext() {
        const fullNext = <HTMLElement>document.getElementById('full_next');

        fullNext.addEventListener('click', async () => {
            if (page < 29) {
                page = 29;
                const dictionaryCard = new DictionaryCard(levelDictionary, page);
                await dictionaryCard.render();
            }
        });
    }

    fullBack() {
        const fullBack = <HTMLElement>document.getElementById('full_back');

        fullBack.addEventListener('click', async () => {
            if (page > 0) {
                page = 0;
                const dictionaryCard = new DictionaryCard(levelDictionary, page);
                await dictionaryCard.render();
            }
        });
    }

    pagination() {
        const next = <HTMLElement>document.getElementById('next');
        const fullNext = <HTMLElement>document.getElementById('full_next');
        const back = <HTMLElement>document.getElementById('back');
        const fullBack = <HTMLElement>document.getElementById('full_back');

        if (page === 29) {
            next.setAttribute('disabled', 'disabled');
            fullNext.setAttribute('disabled', 'disabled');
            back.removeAttribute('disabled');
            fullBack.removeAttribute('disabled');
        }
        if (page === 0) {
            back.setAttribute('disabled', 'disabled');
            fullBack.setAttribute('disabled', 'disabled');
            next.removeAttribute('disabled');
            fullNext.removeAttribute('disabled');
        }
        if (page > 0 && page < 29) {
            back.removeAttribute('disabled');
            fullBack.removeAttribute('disabled');
            next.removeAttribute('disabled');
            fullNext.removeAttribute('disabled');
        }
    }

    audio() {
        const container = <HTMLElement>document.getElementById('main');
        const cards = this.getCards();
        container.addEventListener('click', (e) => {
            const event = <HTMLElement>e.target;
            if (event.classList.contains('sound')) {
                const svgId = event.id;
                const card = cards.filter((el) => el.id === svgId);
                const audio = document.querySelectorAll<HTMLAudioElement>(`.${card[0].word}`);
                audio[0].src = `${link}/${card[0].audio}`;
                audio[1].src = `${link}/${card[0].audioExample}`;
                audio[2].src = `${link}/${card[0].audioMeaning}`;

                audio[0].play();
                for (let i = 0; i < audio.length - 1; i += 1) {
                    const audioId = audio[i];
                    audioId.addEventListener('ended', () => {
                        if (audioId.duration === audioId.currentTime) {
                            audio[i + 1].play();
                        }
                    });
                }
            }
        });
    }

    setCards = (cards: WordData[]): void => {
        this.cards = cards;
    };

    getCards = (): WordData[] => {
        return this.cards;
    };
}