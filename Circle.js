class Circle {
    constructor(x,y,color="blue") {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.speed = 10;
        this.color = color;
        this.dir = "right";
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.strokeStyle = "black";
        pen.stroke();
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    move(){
        switch (this.dir) {
            case "right":
                this.x += this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "up":
                this.y -= this.speed;
                break;
            case "down":
                this.y += this.speed;
                break;
        }
    }
}
