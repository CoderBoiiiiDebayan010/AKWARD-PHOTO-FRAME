function preload() {
    img = loadImage("akward.jpg");
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.position(200,200);
}
    function draw() {
        image(img,250,200,300,300);
        console.log("load picture");
        fill(92, 195, 247)
        rect(220,130,370,30)
        rect(185,160,30,370)
        rect(220,530,370,30)
        rect(590,160,30,370)
        fill(167, 99, 219);
        circle(200,150,60);
        circle(600,150,60);
        circle(600,550,60);
        circle(200,550,60);
    }