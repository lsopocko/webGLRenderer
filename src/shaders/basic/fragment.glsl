#version 300 es
precision mediump float;
in vec3 fragmentColor;
out vec3 color;
void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting
  color = fragmentColor; // return redish-purple
}