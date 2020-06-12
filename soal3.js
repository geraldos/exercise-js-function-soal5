let ageCat = prompt('berapa umur kucing?')

calculateAgeOfCat = (age) => {
    if (age === 1) {
        return 15
    } else if (age === 2) {
        return 24
    } else if (age >= 3) {
        return 24 + (age - 2) * 4
    }

    return age(age)
}
document.write(calculateAgeOfCat(ageCat))