const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}

function setup(){
    
    createCanvas(1600,700);

    engine = Engine.create();
    world = engine.world;

    // grounds on which blocks stand
    ground1 = new Ground(600,500,290,10);
    ground2 = new Ground(1200,320,250,10);
    ground3 = new Ground(800,690,1600,20);

    // ground 1 level one
    block1 = new Block(510,475,30,40);
    block2 = new Block(540,475,30,40);
    block3 = new Block(570,475,30,40);
    block4 = new Block(600,475,30,40);
    block5 = new Block(630,475,30,40);
    block6 = new Block(660,475,30,40);
    block7 = new Block(690,475,30,40);

    //ground 1  level two
    block8 = new Block (540,435,30,40);
    block9 = new Block (570,435,30,40);
    block10 = new Block(600,435,30,40);
    block11 = new Block(630,435,30,40);
    block12 = new Block(660,435,30,40);

    //ground 1  level three
    block13 = new Block(570,395,30,40) ;
    block14 = new Block(600,395,30,40) ;
    block15 = new Block(630,395,30,40) ;

    //ground 1  top
    block16 = new Block(600,355,30,40) ;

    // ground 2  level one
    block17 = new Block(1140,295,30,40);
    block18 = new Block(1170,295,30,40);
    block19 = new Block(1200,295,30,40);
    block20 = new Block(1230,295,30,40);
    block21 = new Block(1260,295,30,40);

    //ground 2  level two
    block22 = new Block(1170,255,30,40) ;
    block23 = new Block(1200,255,30,40) ;
    block24 = new Block(1230,255,30,40) ;

    // //ground 2  top
    block25 = new Block(1200,215,30,40) ;

    polygon = new Polygon();

    slingshot = new Slingshot(polygon.body,{x:200,y:350});

}

function draw(){
    background(2, 235, 247);
    Engine.update(engine);


    ground1.display();
    ground2.display();
    ground3.display();

    fill(229, 229, 16);
    block1.display();
    fill(229, 229, 16);
    block2.display();
    fill(229, 229, 16);
    block3.display();
    fill(229, 229, 16);
    block4.display();
    fill(229, 229, 16);
    block5.display();
    fill(229, 229, 16);
    block6.display();
    fill(229, 229, 16);
    block7.display();
    fill(170, 226, 15);
    block8.display();
    fill(170, 226, 15);
    block9.display();
    fill(170, 226, 15);
    block10.display();
    fill(170, 226, 15);
    block11.display();
    fill(170, 226, 15);
    block12.display();
    fill(128, 226, 15);
    block13.display();
    fill(128, 226, 15);
    block14.display();
    fill(128, 226, 15);
    block15.display();
    fill(17, 224, 110);
    block16.display();
    fill(60, 134, 224);
    block17.display();
    fill(60, 134, 224);
    block18.display();
    fill(60, 134, 224);
    block19.display();
    fill(60, 134, 224);
    block20.display();
    fill(60, 134, 224);
    block21.display();
    fill(93, 15, 226);
    block22.display();
    fill(93, 15, 226);
    block23.display();
    fill(93, 15, 226);
    block24.display();
    fill(181, 15, 226);
    block25.display();

    polygon.display();

    slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
    }
}
