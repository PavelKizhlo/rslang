export default function shuffle<T>(array: Array<T>) {
    const currentArray = array;
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [currentArray[currentIndex], currentArray[randomIndex]] = [
            currentArray[randomIndex],
            currentArray[currentIndex],
        ];
    }

    return currentArray;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
