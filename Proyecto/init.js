var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter' // esto era
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('fondo','ranch.jpg');
    this.load.image('vaca','vaquita.png');
    this.load.image('mesa','mesita.png');
}

function create ()
{
    this.fondo = this.add.image(330,175,"fondo");
    this.fondo.setScale(1.5);   
    vak = this.add.sprite(400, 250, 'vaca');
    mesita = this.add.image(400,450,'mesa');
    
}

function update ()
{
   
    vak.x += 2;
    
    if (vak.x > 1000){
        vak.x = -100;
    }
}