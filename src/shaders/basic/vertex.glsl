#version 300 es
layout(location = 0) in vec4 a_position;
layout(location = 1) in vec3 vertexColor;

uniform mat4 u_matrix;
out vec3 fragmentColor;

// all shaders have a main function
void main() {
  vec4 position = u_matrix * a_position;

  fragmentColor = vertexColor;
  gl_Position = position;
}