let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f d d d d d f f . . . . 
    . . . f f d e d e d f f . . . . 
    . . . f f d d d d d f f . . . . 
    . . f f f d d 3 d d f f f . . . 
    . . f f f d d d d d f f f . . . 
    . . . f f . . 2 . . f f . . . . 
    . . . . d d 2 2 2 d d . . . . . 
    . . . . d . 2 2 2 . d . . . . . 
    . . . . d . . 2 . . d . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("E F E G E A E C5 ", 120)
})
