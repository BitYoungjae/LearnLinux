def birthdayParadox(population, numOfcase):
    remainingCase = numOfcase;
    count = 0;
    probability = 1;

    for i in range(population):
        probThis = 0
        remainingCase = numOfcase - i
        probThis = remainingCase / numOfcase;
        probability *= probThis
        count += 1

    return probability

prob = birthdayParadox(100000000, 2 ** 64)
print(1 - prob)