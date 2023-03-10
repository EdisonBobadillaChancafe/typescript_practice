(() => {
    const number: Array<any> = [1, 2, 3, 4, 5, '', 6, 7, 8]
    const numbers: Array<number> = [1, 2, 3, 4, 5, 8]
    numbers.push(3)
    console.log(numbers)
    numbers.forEach(v => console.log(v))
})()