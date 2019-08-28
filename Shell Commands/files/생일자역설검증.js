function birthdayParadox(population, numOfcase) {
    let remainingCase = numOfcase;
    let count = 0;
    let probability = 1;

    for (let i = 0; i < population; i++) {
        let probThis = 0;
        remainingCase = numOfcase - count++;
        probThis = remainingCase / numOfcase;
        probability *= probThis;
    }

    console.log(count, probability);

    return {
        probability,
        count,
    }
}

const {probability, count} = birthdayParadox(100000, 1073741824);

console.log(1 - probability);