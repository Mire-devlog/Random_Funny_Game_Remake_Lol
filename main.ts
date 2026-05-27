controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 . 
        `, mySprite, 150, 0)
    projectile.startEffect(effects.fire)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 150, 150)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.fire, 500)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.fire, 200)
    sprites.destroy(projectile, effects.fire, 200)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . 1 1 1 . . . 1 1 1 . . . . . . 
    . . 1 1 1 . . 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 . . 1 1 1 . . . . . . 
    . 1 1 1 . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(15, 60)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite.startEffect(effects.coolRadial)
effects.blizzard.startScreenEffect()
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . 3 
        . . . . . . . . . . . . . . 3 3 
        . . . . . . . . . . . . . 3 3 3 
        . . . . . . . . 3 3 3 3 3 3 3 3 
        . . . . 3 3 3 3 3 3 3 3 3 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . . 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . . . . . . 3 3 3 3 3 3 3 3 
        . . . . . . . . . . . . . 3 3 3 
        . . . . . . . . . . . . . . 3 3 
        . . . . . . . . . . . . . . . 3 
        `, SpriteKind.Enemy)
    mySprite2.startEffect(effects.coolRadial)
    mySprite2.setPosition(160, randint(10, 110))
    mySprite2.setVelocity(-100, 0)
})
