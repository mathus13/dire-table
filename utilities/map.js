import Shape from 'clipper-js' // clipping library

/*
  GLOSSARY (cause this crap is confusing)
  Coordinate = the state representation of position on the game board
    - a "CoordinateList" is basically one shape of an area,
      but an area can have multiple "shapes" since it could have holes
    - a coordinate is an array of [x, y] positions (starting from origin at [0, 0])
  Position = the actual pixel position on an SVG
    - a position starts from normal svg origin 0,0 at top left corner of SVG
  Path = SVG string representaiton of a path with potential holes (multiple combined shapes)
*/

export const toArea = (coordA, coordB = coordA) => {
  const left = Math.min(coordA.x, coordB.x) - 0.5
  const right = Math.max(coordA.x, coordB.x) + 0.49
  const bottom = Math.min(coordA.y, coordB.y) - 0.5
  const top = Math.max(coordA.y, coordB.y) + 0.49
  return [
    { x: left, y: bottom },
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom },
  ]
}

const scaleUp = coords => coords.map(c => ({ x: c.x * 100, y: c.y * 100 }))
const scaleDown = coords => coords.map(c => ({ x: c.x / 100, y: c.y / 100 }))
export const mergeArea = (areas, newArea) => {
  const areasShapes = new Shape(areas.map(scaleUp), true, true)
  const newAreasShapes = new Shape([newArea].map(scaleUp), true, true)
  return areasShapes.union(newAreasShapes).mapToLower().map(scaleDown)
}

const roundToHalvesOnly = n => Math.round(n - 0.5) + 0.5
const roundToWhole = n => Math.round(n)
export const toCoordinate = (board, position, tokenSize = 1) => {
  const sizeIsOdd = tokenSize % 2 === 1
  const round = sizeIsOdd ? roundToHalvesOnly : roundToWhole
  return {
    x: round(((position.x - board.centerPx) / board.squarePx)),
    y: round(((position.y - board.centerPx) / board.squarePx) * -1),
  }
}

export const toPosition = board => coordinate => ({
  x: board.centerPx + (coordinate.x * board.squarePx),
  y: board.centerPx + (coordinate.y * board.squarePx * -1),
})

const toPositionList = board => coordinateList => coordinateList.map(toPosition(board))
const toSimplePath = (positionList) => {
  const str = positionList.reduce((acc, position, i) => {
    const command = i === 0 ? 'M' : 'L'
    return `${acc}${command} ${position.x},${position.y} `
  }, '')
  return `${str} Z `
}
export const toPath = (board, coordinateList) =>
  toSimplePath(toPositionList(board)(coordinateList))
// export const toPath = (board, coordinateLists) =>
//   coordinateLists.map(toPositionList(board)).map(toSimplePath).join('')

export const toCircle = (board, coordinate, tokenSize = 1) => {
  const position = toPosition(board)(coordinate)
  return {
    cx: position.x,
    cy: position.y,
    radius: (tokenSize / 2) * board.squarePx,
  }
}