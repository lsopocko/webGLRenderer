import GL from "./renderingContext";

export default class Shader {
    public program: WebGLProgram;
    private vertexShader: WebGLShader;
    private fragmentShader: WebGLShader;

    public constructor(vertexShaderSource: string, fragmentShaderSource: string) {
        this.vertexShader = this.createShader(GL.VERTEX_SHADER, vertexShaderSource);
        this.fragmentShader = this.createShader(GL.FRAGMENT_SHADER, fragmentShaderSource);

        if (typeof this.vertexShader !== "undefined" && typeof this.fragmentShader !== "undefined") {
            this.program = this.createProgram();
        }
    }

    public enable(): void {
        GL.useProgram(this.program);
    }

    public getAttribLocation(name: string): number {
        return GL.getAttribLocation(this.program, name);
    }

    public getUniformLocation(name: string): WebGLUniformLocation {
        return GL.getUniformLocation(this.program, name);
    }

    private  createShader(type: number, source: string): WebGLShader {
        const shader = GL.createShader(type);
        GL.shaderSource(shader, source);
        GL.compileShader(shader);

        const success = GL.getShaderParameter(shader, GL.COMPILE_STATUS);

        if (success) {
          return shader;
        }

        console.error(GL.getShaderInfoLog(shader));
        GL.deleteShader(shader);
    }

    private createProgram(): WebGLProgram {
        const program = GL.createProgram();

        GL.attachShader(program, this.vertexShader);
        GL.attachShader(program, this.fragmentShader);
        GL.linkProgram(program);

        const success = GL.getProgramParameter(program, GL.LINK_STATUS);

        if (success) {
          return program;
        }

        console.error(GL.getProgramInfoLog(program));
        GL.deleteProgram(program);
    }
}