import Renderable from "../Renderable";

export default class Box extends Renderable {
    public constructor(width: number, height: number){
        super([
            0, 0, 0, // first point of first triangle
            width, 0, 0, // second
            width, height, 0, // third

            width, height, 0, // first point of second triangle
            0, height, 0, // second point of second triangle
            0, 0, 0, // third point of second triangle
        ]);
    }
}
