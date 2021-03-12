/**
  * @typedef LAWSgridConfig
  * @param {number} numRows
  * @param {number} numCols
  * @param {string} grid
*/

const gridConstants = {
  e: "EMPTY",
  EMPTY: "e",
  
  s: "SLOT",
  SLOT: "s",
  
  f: "FOUNDATION",
  FOUNDATION: "f",
  
  r: "ROW",
  ROW: "r",
  
  d: "DRAW PILE",
  DRAW_PILE: "d",
  
  w: "WASTE PILE",
  WASTE_PILE: "w",
  
  o: "ALLOW ONE",
  ALLOW_ONE: "o",
  
  n: "NO LIMIT",
  NO_LIMIT: "n",
  
  h: "HORIZONTAL",
  HORIZONTAL: "h",
  
  t: "TILT LEFT",
  TILT_LEFT: "t",
  
  i: "TILT RIGHT",
  TILT_RIGHT: "i",
  
  q: "FACE DOWN",
  FACE_DOWN: "q",
  
  p: "FACE UP",
  FACE_UP: "p"
}

const acesUpLayout = "rd4sw"
const clearTheDungeonLayout = "r4sqr4sqr4sprd4sow"

class LAWSgrid {
  constructor(config) {
    this.numRows = config.numRows || 1
    this.numCols = config.numCols || 1
    this.gridString = config.grid
    this.grid = [[]]
    
    this.createGrid()
  }
  
  createGrid() {
    const rows = this.gridString.split(gridConstants.ROW)
    const row 
  }
  
  static layoutGrid() {
    this.grid.forEach(row => {
      row.forEach(col => {
        // apply mods
      }
    }
  }
}
