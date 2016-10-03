window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create});

  function preload() {
    game.load.image('pika', 'assets/pikachu.png');
  }

  function create() {
    var pika = game.add.sprite(game.world.centerX, game.world.centerY, 'pika');
    pika.anchor.setTo(0.5, 0.5);
  }
};
