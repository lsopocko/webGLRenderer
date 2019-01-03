import Renderable from "../Renderable";

export default class Cube extends Renderable {
    private _colors: number[] = [
        1,  1,  1,
        1,  1,  1,
        1,  1,  1,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        1,  1,  1,
        1,  1,  1,
        1,  1,  1,
        1,  0,  0,
        1,  0,  0,
        1,  0,  0,
        0,  1,  0,
        0,  1,  0,
        0,  1,  0,
        1,  0,  1,
        1,  0,  1,
        1,  0,  1,
        1,  0,  1,
        1,  0,  1,
        1,  0,  1,
        0,  1,  1,
        0,  1,  1,
        0,  1,  1,
        0,  1,  1,
        0,  1,  1,
        0,  1,  1,
        0,  0,  1,
        0,  0,  1,
        0,  0,  1,
    ];

    public constructor() {
        super([
            -1.0,-1.0,-1.0,
            -1.0,-1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0,-1.0, 
            -1.0,-1.0,-1.0,
            -1.0, 1.0,-1.0,
            1.0,-1.0, 1.0,
            -1.0,-1.0,-1.0,
            1.0,-1.0,-1.0,
            1.0, 1.0,-1.0,
            1.0,-1.0,-1.0,
            -1.0,-1.0,-1.0,
            -1.0,-1.0,-1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0,-1.0,
            1.0,-1.0, 1.0,
            -1.0,-1.0, 1.0,
            -1.0,-1.0,-1.0,
            -1.0, 1.0, 1.0,
            -1.0,-1.0, 1.0,
            1.0,-1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0,-1.0,-1.0,
            1.0, 1.0,-1.0,
            1.0,-1.0,-1.0,
            1.0, 1.0, 1.0,
            1.0,-1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0,-1.0,
            -1.0, 1.0,-1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0,-1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0,-1.0, 1.0
        ]);
    }

    get colors() {
        return new Float32Array(this._colors); 
    }
}