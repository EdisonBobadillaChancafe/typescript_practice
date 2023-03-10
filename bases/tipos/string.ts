(() => {
    const batman: string = 'Batman'
    const linternaverde: string = "linterna verde"
    const volcanoNegro: string = `Volcano negro`
    console.log(`I'am ${batman.toUpperCase()}`)
    console.log(`I'am ${batman[10]?.toUpperCase() || 'Superman'}`)
})()