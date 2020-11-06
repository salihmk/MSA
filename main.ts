input.onButtonPressed(Button.A, function () {
    basic.showString("MSA")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1300)
    basic.showLeds(`
        # . # . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1300)
    basic.showLeds(`
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
})
