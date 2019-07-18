let myPosX = 25;
let myPosY = 25;
let mySpeed = 4;
let enemyPosX, enemyPosY;
let enemyWidth = 50, enemyHeight =  50;

let myWidth =  50;
let myHeigth = 50;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let points = 0;

// declare variables for graphics

let clefairy;
let togepi;
let backdrop;

function setup() {
    createCanvas(500, 500);
    background(0);
    textSize(15);

    // switch rectMode
    rectMode(CENTER); // the origin will be the center not the corner
    imageMode(CENTER);



    // determine the random position of the enemy
    enemyPosX = random(25, 475);
    enemyPosY = random(100, 475);

    // load in images
    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
    backdrop = loadImage("starwars_PNG56.png")

}

function draw() {

    image(backdrop, width/2, heigth/2, width, height);
    // draw the togapi enemy
    image(togepi, enemyPosX, enemyPosY, enemyWidth, enemyHeight);

    // draw your clefairy self
    image(clefairy, myPosX, myPosY, myWidth, myHeigth);

    // // draw the red enemy 
    // fill (255, 0, 0);
    // rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight);
    
    // // draw myself
    // fill (0, 0, 255);
    // rect(myPosX, myPosY, 50, 50)
    
    // if the LEFT ARROW is pressed
    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myPosX += mySpeed;
    }

    if (keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myPosY += mySpeed;
    }

    //restriction within the canvas
    if (myPosX <= 25) {
        myPosX = 25;
    }

    if (myPosX >= 475) {
        myPosX = 475;
    } 
    if (myPosY <= 25) {
        myPosY = 25;
    }
    if (myPosY >= 475) {
        myPosY = 475;
    }

    //know my edges
    myLeft = myPosX - 25;
    myRight = myPosX + 25;
    myTop = myPosY - 25;
    myBottom = myPosY + 25;

    // define enemy edges
    enemyLeft = enemyPosX - 25;
    enemyRight =  enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    // detect collision! (or rather figure out the code for non-collision_;
    
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // do nothing 
    }

    else {
        // there is collision
        console.log("collision");
        fill(random(255), random(255), random(255));
        text("I am colliding, OUCH", 255, 480);

        points++;

        enemyPosY = random(25, 475);
        enemyPosX = random(25, 475);
    }

    fill(255);
    text("Enemies collected: " + points, 340, 25);

}












































    // if (points = 10) {
    //     background(0);
    //     text ("GAME OVER", 100, 100);
    // }