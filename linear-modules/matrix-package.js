class DecimalNumber{
  constructor(x){
    if (isNaN(x)){
      throw new Error("x should be in a decimal.")
    }
    this.value = x
  }

  toString(){
    return String(this.value)
  }

  equals(that){
    if (!that instanceof DecimalNumber){
      return false
    }
    return this.value == that.value
  }

  doesNotEqual(that){
    return !this.equals(that)
  }

  greaterThan(that){
      return this.value > that.value}

  greaterThanOrEquals(that){
    return this.value >= that.value}

  lessThan(that){
    return !this.greaterThanOrEquals(that)}

  lessThanOrEquals(that){
    return !this.greaterThan(that)}

  add(that){
    return new DecimalNumber(this.value + that.value)
  }

  negate(){
    return new DecimalNumber(-this.value)
  }

  subtract(that){
    return this.add(that.negate())
  }

  multiply(that){
    return new DecimalNumber(this.value * that.value)
  }

  invert(){
    if (this.value == 0){
      throw new Error("Cannot divide by zero.")
    }
    return new DecimalNumber(1.0 / this.value)
  }

  divide(that){
    return this.multiply(that.invert())
  }
}

class DecimalMatrix extends Array{
  static parseEntry(entry){
    if (entry instanceof DecimalNumber){
      return entry}

    if (isNaN(entry)){
      throw new Error("Entry should be in a decimal.")
    }
    return new DecimalNumber(entry)
  }

  constructor(M){
    // Sanity check - ensures that the matrix is rectangular
    for (let i=0; i<M.length; i++){
      if (M[i].length != M[0].length){
        alert("Given array must be rectangular.")
        throw new Error("Given array must be rectangular.")
      }
    }
    // Creates a matrix M from entries
    let matrixM = []
    for (let i=0; i<M.length; i++){
      let row = []
      for (let j=0; j<M[0].length; j++){
        let entry = DecimalMatrix.parseEntry(M[i][j])
        if (entry == undefined){
          throw new Error("Entry is not defined.")
          return 
        }
        row.push(entry)
      }
      matrixM.push(row)
    }
    super(...matrixM)
    this.rowDim = matrixM.length
    this.colDim = matrixM[0].length
  }

  // Returns a string representation of a matrix
  toString(){
    let string = "["
    for (let i=0; i<this.length; i++){
      string += "["
      for (let j=0; j<this[0].length; j++){
        string += this[i][j].toString()
        if (j < this[i].length-1){
          string += ", "
        }
      }
      string += "]"
      if (i < this.length-1){
        string += ", "}
    }
    string += "]"
    return string
  }

  LaTeX(){
    let string = "\\begin{bmatrix} \n"
    for (let i=0; i<this.rowDim; i++){
      for (let j=0; j<this.colDim; j++){
        string += String(this[i][j]) + " "
        if (j < this.colDim-1){
          string += "& "}
      } 
      if (i < this.rowDim-1){
        string += "\\\\\n"}
    }
    string += "\n\\end{bmatrix}"
    return string
  }

  // Checks equality between two matrices
  equals(that){
    if (!that instanceof DecimalMatrix){
      return false}
    if (this.rowDim != that.rowDim || this[0].colDim != that[0].colDim){
      return false}
    for (let i=0; i<this.rowDim; i++){
      for (let j=0; j<this.colDim; j++){
        let thisValue = this[i][j]
        let thatValue = that[i][j]
        if (thisValue.doesNotEqual(thatValue)){
          return false}
      }
    }
    return true
  }

  doesNotEqual(that){
    return !this.equals(that)}

  transpose(){
    let matrixM = []
    for (let j=0; j<this.colDim; j++){
      let row = []
      for (let i=0; i<this.rowDim; i++){
        row.push(this[i][j])
      }
      matrixM.push(row)
    }
    return new DecimalMatrix(matrixM)
  }

  // Return the index of the first nonzero entry of row i of the matrix
  // If there are no such entries, output the column dimension instead
  firstNonZero(i){
    let zero = new DecimalNumber(0)
    let currentRow = this[i]
    let j = this.colDim
    for (let k=0; k<this.colDim; k++){
      if (currentRow[k].doesNotEqual(zero)){
        j = k
        break
      }
    }
    return j
  }

  // Determine whether or not the matrix is nonzero
  isNonZero(){
    for (let i=0; i<this.rowDim; i++){
      if (this.firstNonZero(i) < this.colDim){
        return true}
    }
    return false
  }

  // Arithmetic operations
  // Add two matrices
  add(that){
    let matrixM = []
    for (let i=0; i<this.rowDim; i++){
      let row = []
      for (let j=0; j<this.colDim; j++){
        row.push(this[i][j].add(that[i][j]))
      }
      matrixM.push(row)
    }
    return new DecimalMatrix(matrixM)
  }

  negate(){
    let matrixM = []
    for (let i=0; i<this.rowDim; i++){
      let row = []
      for (let j=0; j<this.colDim; j++){
        row.push(this[i][j].negate())
      }
      matrixM.push(row)
    }
    return new DecimalMatrix(matrixM)
  }

  subtract(that){
    return this.add(that.negate())}

  multiply(that){
    if (this.colDim != that.rowDim){
      throw new Error("Dimensions of matrices must agree.")
      return 
    }

    let matrixM = []
    for (let i=0; i<this.rowDim; i++){
      let row = []
      for (let j=0; j<that.colDim; j++){
        let sum = new DecimalNumber(0)
        for (let k=0; k<this.colDim; k++){
          sum = sum.add(this[i][k].multiply(that[k][j]))}
        row.push(sum)
      }
      matrixM.push(row)
    }
    return new DecimalMatrix(matrixM)
  }

  swapRows(ithRow, jthRow){
    if (ithRow>=this.rowDim || jthRow>=this.rowDim){
      throw new Error("Row index out of reach.")
      return 
    }
    let matrixM = []
    for (let k=0; k<this.rowDim; k++){
      if (k!=ithRow && k!=jthRow){
        matrixM.push(this[k])}
      else {
        matrixM.push(this[ithRow+jthRow-k])}
    }
    return new DecimalMatrix(matrixM)
  }

  scaleRows(ithRow, cScalar){
    if (ithRow >= this.rowDim){
      throw new Error("Row index out of reach.")
      return
    }
    let scalar = new DecimalNumber(DecimalNumber.parseEntry(cScalar))
    let matrixM = []
    for (let k=0; k<this.rowDim; k++){
      if (k != ithRow){
        matrixM.push(this[k])}
      else {
        let row = []
        for (let h=0; h<this.colDim; h++){
          row.push(this[k][h].multiply(scalar))
        }
        matrixM.push(row)
      }
    }
    return new DecimalMatrix(matrixM)
  }

  addRows(ithRow, jthRow, cScalar){
    if (ithRow>=this.rowDim || jthRow>=this.rowDim){
      throw new Error("Row index out of reach.")
      return
    }
    let scalar = new DecimalNumber(DecimalNumber.parseEntry(cScalar))
    let matrixM = []
    for (let k=0; k<this.rowDim; k++){
      if (k != jthRow){
        matrixM.push(this[k])}
      else {
        let row = []
        for (let h=0; h<this.colDim; h++){
          let entry = this[k][h].add(this[ithRow][h].multiply(scalar))
          row.push(entry)
        }
        matrixM.push(row)
      }
    }
    return new DecimalMatrix(matrixM)
  }    
}