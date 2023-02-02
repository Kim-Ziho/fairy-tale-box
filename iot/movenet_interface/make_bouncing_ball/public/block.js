export class Block {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw(ctx, x, y) {
    let maxX = this.width + x;
    let maxY = this.height + y;
    const xGap = 80;
    const yGap = 60;

    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(x, y, this.width, this.height);
    ctx.fill();

    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(maxX, maxY);
    ctx.lineTo(maxX - xGap, maxY + yGap);
    ctx.lineTo(x - xGap, maxY + yGap);
    ctx.lineTo(x, maxY);
    ctx.fill();

    ctx.fillStyle = "#9d0919";
    ctx.beginPath();
    ctx.moveTo(x, maxY);
    ctx.lineTo(x - xGap, maxY + yGap);
    ctx.lineTo(x - xGap, y + yGap);
    ctx.lineTo(x, y);
    ctx.fill();
  }
}
