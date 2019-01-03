import * as TWEEN from "@tweenjs/tween.js";
import Shader from "./Shader";
import basicFragmentShader from "./shaders/basic/fragment.glsl";
import basicVertexShader from "./shaders/basic/vertex.glsl";
import GL from "./renderingContext";
import Box from "./entities/Box";
import Cube from "./entities/Cube";
import { multiply, projection, translate, xRotate, yRotate, zRotate, scale } from "./m4";

class WebGLRenderer {
    private clearColor: number[] = [0.4, 0.4, 0.4, 1.0];

    public constructor() {
        GL.enable(GL.DEPTH_TEST);
        GL.depthFunc(GL.LESS);
    }

    public render(shader: Shader, entity: Cube, matrix): void {
        this.clear();

        shader.enable();

        const matrixLocation = shader.getUniformLocation("u_matrix");

        const positionBuffer = GL.createBuffer();
        const colorBuffer = GL.createBuffer();

        GL.bindBuffer(GL.ARRAY_BUFFER, positionBuffer);
        GL.bufferData(GL.ARRAY_BUFFER, entity.points, GL.STATIC_DRAW);
        GL.enableVertexAttribArray(0);
        GL.vertexAttribPointer(0, 3, GL.FLOAT, false, 0, 0);

        GL.bindBuffer(GL.ARRAY_BUFFER, colorBuffer);
        GL.bufferData(GL.ARRAY_BUFFER, entity.colors, GL.STATIC_DRAW);
        GL.enableVertexAttribArray(1);
        GL.vertexAttribPointer(1, 3, GL.FLOAT, false, 0, 0);

        GL.uniformMatrix4fv(matrixLocation, false, matrix);

        GL.drawArrays(GL.TRIANGLES, 0, entity.points.length / 3);
    }

    private clear(): void {
        GL.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
    }
}

function makeZToWMatrix(fudgeFactor) {
    return [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, fudgeFactor,
      0, 0, 0, 1,
    ];
  }

document.body.style.background = "#101010";
document.body.style.margin = "0";
document.body.style.padding = "0";

const renderer = new WebGLRenderer();
const basicShader = new Shader(basicVertexShader, basicFragmentShader);

const box = new Box(400, 400);
const cube = new Cube();

const translationMatrix = {
    xRotation: 0,
    yRotation: 0,
    x: 0,
    y: 0
};

const moveTween = new TWEEN.Tween(translationMatrix)
    .to({ yRotation: 360, xRotation: 360, x: 500, y: 500 }, 5000)
    .repeat(Infinity)
    .yoyo(true)
    .easing(TWEEN.Easing.Linear.None);

function onRequestAnimationFrame(): void {
    let matrix = makeZToWMatrix(1);
    matrix = multiply(matrix, projection(GL.canvas.clientWidth, GL.canvas.clientHeight, 400.0));
    matrix = translate(matrix, translationMatrix.x, translationMatrix.y, 100);
    matrix = scale(matrix, 100, 100, 40);
    matrix = yRotate(matrix, translationMatrix.yRotation * Math.PI / 180);
    matrix = xRotate(matrix, translationMatrix.xRotation * Math.PI / 180);

    renderer.render(basicShader, cube, matrix);
    TWEEN.update();

    window.requestAnimationFrame(onRequestAnimationFrame);
}

window.requestAnimationFrame(onRequestAnimationFrame);
moveTween.start();
