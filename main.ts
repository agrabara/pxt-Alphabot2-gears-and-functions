// By Michal


function ZMNIEJSZ() {
    F1 = F1 - 20
    F2 = F2 - 10
    if (F1 < 50) {
        F1 = 50
    }
    if (F2 < 20) {
        F2 = 20
    }
    WSWPRD()
}
function WSWPRD() {
    if (F1 <= 50) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 70) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 90) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 110) {
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 130) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 150) {
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 170) {
        basic.showLeds(`
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 190) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 210) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 230) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (F1 < 250) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function ZWIEKSZ() {
    F1 = F1 + 20
    F2 = F2 + 10
    if (F1 > 250) {
        F1 = 250
    }
    if (F2 > 100) {
        F2 = 100
    }
    WSWPRD()
}
function swiatelka() {
    item = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
    item.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    item.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    item.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    item.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    item.show()
}
function doLewo() {
    AlphaBot2.RunDelay(Dir.turnLeft, F2, 0.5)
}
function doPrawo() {
    AlphaBot2.RunDelay(Dir.turnRight, F2, 0.5)
}
input.onButtonPressed(Button.A, function () {
    morze += 1
    if (morze > 8) {
        morze = 1
    }
    basic.showNumber(morze)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(1)
        doPrzodu()
    }
    if (receivedNumber == 2) {
        basic.showNumber(2)
        doTylu()
    }
    if (receivedNumber == 3) {
        basic.showNumber(3)
        doPrawo()
    }
    if (receivedNumber == 4) {
        basic.showNumber(4)
        doLewo()
    } else if (receivedNumber == 5) {
        basic.showNumber(5)
        swiatelka()
    } else if (receivedNumber == 6) {
        basic.showNumber(6)
        swiatelkaoff()
    } else if (receivedNumber == 7) {
        basic.showNumber(7)
        ZWIEKSZ()
    } else if (receivedNumber == 8) {
        basic.showNumber(8)
        ZMNIEJSZ()
    } else {

    }
})
function doPrzodu() {
    AlphaBot2.RunDelay(Dir.forward, F1, 2)
}
input.onButtonPressed(Button.B, function () {
    if (morze == 1) {
        radio.sendNumber(morze)
    }
    if (morze == 2) {
        radio.sendNumber(morze)
    }
    if (morze == 3) {
        radio.sendNumber(morze)
    }
    if (morze == 4) {
        radio.sendNumber(morze)
    }
    if (morze == 5) {
        radio.sendNumber(morze)
    } else if (morze == 6) {
        radio.sendNumber(morze)
    } else if (morze == 7) {
        radio.sendNumber(morze)
        WSWPRD()
    } else if (morze == 8) {
        radio.sendNumber(morze)
        WSWPRD()
    } else {

    }
})
function doTylu() {
    AlphaBot2.RunDelay(Dir.backward, F1, 2)
}
function swiatelkaoff() {
    item = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
    item.setBrightness(0)
    item.show()
}
let morze = 0
let item: neopixel.Strip = null
let F2 = 0
let F1 = 0
basic.showIcon(IconNames.Asleep)
radio.setGroup(10)
F1 = 50
F2 = 20
basic.forever(function () {

})
 