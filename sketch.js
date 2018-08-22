var wert={
	x:100,
	y:150
};
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
}
function draw(){
	r=random(100,255);
	g=0;
	b=random(100,190);
	wert.x=random(0,windowWidth);
	wert.y=random(0,windowHeight);
	noStroke();
	fill(r,g,b,100);
	ellipse(wert.x,wert.y,50,50);

}
