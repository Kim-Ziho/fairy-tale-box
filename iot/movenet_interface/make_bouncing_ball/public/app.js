import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
    });

    this.ball = new Ball(this.stageWidth, this.stageHeight, 50, 5);
    this.block = new Block(500, 30);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  // 이벤트 리스터 화면 크기에 따른 변화
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 루프
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx, this.mouseX, this.mouseY);
    this.ball.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block,
      this.mouseX,
      this.mouseY
    );
  }
}

window.onload = () => {
  new App();
};
