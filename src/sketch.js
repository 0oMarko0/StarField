function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);



    Star.prototype.update = function (speed) {
        this.z = this.z - speed;

        // Generate Stars in the backgroud
        if (this.z < 1) {

            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    };

    Star.prototype.show = function () {
        fill(255);
        noStroke();

        // Movement star
        var sx = map(this.x/ this.z, 0, 1, 0, width);
        var sy = map(this.y/ this.z, 0, 1, 0, height);


        var starSize = map(this.z, 0, 600, 8, 0);

        ellipse(sx, sy, starSize, starSize);
    };
    
    Star.prototype.acceleration = function () {
        
    }


}

function Galaxy(numberOfStar) {

    this.numberOfStars = numberOfStar;
    this.galaxy = [];

    Galaxy.prototype.generate = function () {
        console.log('generate galaxy');
        for (i = 0; i < this.numberOfStars; i++) {
            var star = new Star();
            this.galaxy.push(star);
        };
    };

    Galaxy.prototype.render = function () {
        for (var star = 0; star < this.galaxy.length; star++) {
            this.galaxy[star].update(speed);
            this.galaxy[star].show();
        }
    };
}


var galaxy = new Galaxy(2000);

function setup() {
    // 3840 x 2160 4k resolution
    createCanvas(640, 640);
    galaxy.generate();
}

function draw() {
    speed = map(mouseX, 0, width, 2, 4);
    console.log(speed);
    background(0);

    // To fading out from the center
    translate(width/2, height/2);
    galaxy.render(speed);

}
