input.onPinPressed(TouchPin.P0, function () {
    index = 4
    _2index = 0
    while (index >= 0) {
        led.plot(index, _2index)
        basic.pause(200)
        index += -1
        _2index += 1
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter >= 0) {
        basic.showNumber(counter)
        counter += -1
    }
    music.playMelody("A G G A B A - - ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let counter = 0
let _2index = 0
let index = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
