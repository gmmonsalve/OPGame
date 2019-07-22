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
    this.load.image('fondo','./imagenes/ranch.jpg');
    this.load.image('vaca','./imagenes/vaquita.png');
    this.load.image('mesa','./imagenes/mesita.png');
    this.load.image('dialog','./imagenes/dialogo.png')
    this.load.image('apple','./imagenes/manzana.png');
    this.load.image('basket','./imagenes/cesta.png')

}

function create ()
{

    this.matter.world.setBounds();//Agrega los limites al mapa
    this.matter.world.updateWall(true,"bottom",0,450,800,100);
    

    this.fondo = this.add.image(330,175,"fondo");
    this.fondo.setScale(1.5);
    animal = this.add.sprite(0, 250, 'vaca');
    mesita = this.add.image(400,450,'mesa');
    apple =  this.matter.add.image(50, 100, 'apple', null, { chamfer: 16 });
    apple.setScale(0.2);
    this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });
    cesta =  this.add.image(650,320,'basket');
    cesta.setScale(0.4);


}


function moveAnimal(animal, speed)
{
    animal.x+=speed;
}

function resetAnimal(animal)
{
    animal.x = 0;
}

function update ()
{
   if(animal.x<400)
   {
    moveAnimal(animal,2);

   }else{
    nube = this.add.image(630,100,'dialog').setAlpha(0);
     this.add.image(nube.x,nube.y-8,'apple').setScale(0.2);
        nube.setScale(0.5);

        this.tweens.add({
        targets: nube,
        alphaTopLeft: { value: 1, duration: 5000, ease: 'Power1' },
        alphaBottomRight: { value: 1, duration: 10000, ease: 'Power1' },
        alphaBottomLeft: { value: 1, duration: 5000, ease: 'Power1', delay: 5000 },
        yoyo: true,
        loop: -1

    });


   }

   if(apple.x==630){
     console.log(apple.x);
   }

}
