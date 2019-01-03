import { Vector3 } from "math3d";

export default class Renderable {
    public position = {
        x: 0,
        y: 0,
        z: 0
    };

    public constructor(private _points: number[]) {

    }

    get points () {
        return new Float32Array(this._points);
    }
}
