function drawInitials() {
    const canvas = document.getElementById('Canvas');
    if (!canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(20, 80)
    ctx.lineTo(20, 20);
    ctx.lineTo(40, 50);
    ctx.lineTo(60, 20);
    ctx.lineTo(60, 80);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(80, 80);
    ctx.lineTo(80, 20);
    ctx.lineTo(120, 20);
    ctx.lineTo(120, 50);
    ctx.lineTo(80, 50);
    ctx.moveTo(80, 50);
    ctx.lineTo(120, 80);
    ctx.stroke();
    ctx.closePath();
}
window.addEventListener('load', drawInitials);
