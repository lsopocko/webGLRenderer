const canvasElement = document.createElement("canvas");
const glContext = canvasElement.getContext("webgl2");
document.body.appendChild(canvasElement);

function onResize() {
    canvasElement.width = document.documentElement.clientWidth;
    canvasElement.height = document.documentElement.clientHeight;
    glContext.viewport(0, 0, glContext.canvas.width, glContext.canvas.height);
}

onResize();

window.addEventListener("resize", onResize);

export default glContext;