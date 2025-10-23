$fx.params([
  {
    id: "circle_radius",
    name: "Circle radius",
    type: "number",
    default: 120,
    options: {
      min: 40,
      max: 240,
      step: 1,
    },
  },
  {
    id: "circle_color",
    name: "Circle color",
    type: "color",
    default: "4488ff",
  },
])

let circleRadius
let circleColor

function applyParams() {
  const colorParam = $fx.getParam("circle_color")
  circleColor = colorParam ? colorParam.hex.rgba : "#4488ff"
  circleRadius = $fx.getParam("circle_radius") ?? 120
}

applyParams()

$fx.features({
  "Circle radius": Math.round(circleRadius),
  "Circle color": circleColor,
})

function setup() {
  createCanvas(windowWidth, windowHeight)
  noLoop()
  renderCircle()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  renderCircle()
}

function renderCircle() {
  background("#111111")
  noStroke()
  fill(circleColor)
  const diameter = circleRadius * 2
  const x = width / 2
  const y = height / 2
  ellipse(x, y, diameter, diameter)
}

function draw() {
  // draw is intentionally empty because we render on demand via renderCircle()
}

$fx.on("params:update", () => {
  applyParams()
  renderCircle()
  return true
})
