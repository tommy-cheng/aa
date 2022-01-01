input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let point = 0
let player: game.LedSprite = null
let life = 5
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    basic.pause(5000)
    life += 1
})
basic.forever(function () {
    let rocks: game.LedSprite[] = []
    basic.pause(200)
    if (rocks.length < 5) {
        rocks.unshift(game.createSprite(randint(0, 5), 0))
    }
    for (let value of rocks) {
        for (let index = 0; index < 4; index++) {
            if (value.get(LedSpriteProperty.Y) == 4) {
                if (value.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
                    life += -1
                }
                value.set(LedSpriteProperty.Y, 0)
                value.set(LedSpriteProperty.X, randint(0, 4))
                point += 1
            } else {
                basic.pause(100)
                value.change(LedSpriteProperty.Y, 1)
            }
        }
        value.delete()
    }
    if (life == 0) {
        game.setScore(point)
        game.setLife(0)
    }
})
