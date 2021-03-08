class LAWSgrid {
  constructor(config = {}) {
    config = {
      numRows: 1,
      numCols: 1,
      modifiers: [["normal"]]
    }
  
    grid = []
    
    this.config = {
      ...this.config, ...config
    }
  }
  
  numberOfRows() {
    return this.grid.length
  }
  
  addRow(contents = []) {
    this.config.numRows += 1
    this.grid.push([contents])
  }
  
  removeRow(rowIndex = -1) {
    if (rowNum < 0 || this.numberOfRows > rowIndex) return void
    this.grid.splice(rowIndex, 1)
  }
  
  numberOfColumns(rowNumber) {
    const row = this.grid[rowNumber]
    return (!row) ? null : row.length
  }
  
  addColumn(rowIndex, startIndex, contents) {
    this.grid
  }
}
