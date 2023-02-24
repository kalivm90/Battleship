export class Player {
    constructor(name) {
        this.name = name 
        this.board = new Board();
    }

    shuffleBoard() {
        this.board = new Board();
    }
}


class Square {
    constructor(row, col) {
        this.row = row 
        this.col = col 
        this.ship = false 
        this.hit = false 
    }

    info = () => {
        return {
            "row": this.row,
            "col": this.col,
            "ship": this.ship,
            "hit": this.hit
        }
    }

    hasShip = () => {
        return this.ship
    }
}

class Board {
    constructor() {
        this.board = this._makeBoard();   
        this.ships = [5, 4, 3, 3, 2, 2, 1]; 
        this.totalHits = 20;
        this.shipTotal = 7
        this.directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        this.surrounding = [...this.directions, [1, 1], [1, -1], [-1, 1], [-1, -1]]
        this._placeShips();
    }
    
    /* NOT SURE IF THIS WILL WORK */
    checkForWin = () => {
        let count = 0;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                const square = this.board[i][j]
                if (square.hit && square.ship) {
                    count += 1
                    console.log(square, count);
                }
            }
        }

        if (count === this.totalHits) {
            return true 
        }
        return false
    }

    getOpenSquares = () => {
        let open = []
        this.board.forEach((row, index) => {
            row.forEach(col => {
                if (!col.hit) {
                    open.push(col);
                }
            })
        })
        this._shuffleArray(open)
        return open;
    }

    findSquare =(index) => {
        return this.board[index[0]][index[1]]
    }

    getBoard = () => {
        return this.board
    }

    setHit = (row, col) => {
        this.board[row][col].hit = true 
    }

    _makeBoard = () => {
        const SIZE = 10
        return Array.from({"length": SIZE}, (_, i) => 
            Array.from({"length": SIZE}, (_, j) => new Square(i, j)));
    }

    _placeShips = () => {
        // loop through ship types
        for (let i = 0; i < this.shipTotal; i++) {
            const ship = this.ships.shift();
            let placed = false
            // while ship hasnt been placed yet...
            while(!placed) {
                const [row, col] = this._getRandomSquare();
                this._shuffleArray(this.directions);
                // if 1 square radius does not contain ship
                if (this._checkSurroundings(row, col)) {
                    // loop through left, right, top, and bottom squares
                    for (let dir = 0; dir < this.directions.length; dir++) {

                        if (this._placeShipInDirection(ship, row, col, this.directions[dir])) {
                            placed = true
                            break
                        } 
                    }    
                }
            }
        }
    }
    
    _getRandomSquare = () => {
        const row = this._getRandomNum();
        const col = this._getRandomNum();
        return [row, col];
    }
    
    _placeShipInDirection = (ship, row, col, direction) => {
        const newR = row + direction[0];
        const newC = col + direction[1];
        // if outside boundary
        if (newR < 0 || newR >= 10 || newC < 0 || newC >= 10 || this.board[newR][newC].ship) {
            return false;
        }
        // loop through squares in direction n=ship length
        for (let i = 1; i < ship; i++) {
            const r = row + i * direction[0];
            const c = col + i * direction[1];
            // if outside boundary or has a ship or radius squares have ships
            if (r < 0 || r >= 10 || c < 0 || c >= 10 || this.board[r][c].hasShip() || !this._checkSurroundings(r, c)) {
                return false;
            }
        }
        // set ships on clean squares
        for (let i = 0; i < ship; i++) {
            const r = row + i * direction[0];
            const c = col + i * direction[1];
            this.board[r][c].ship = true;
        }
        return true;
    }
    
    
    // checks 1 square radius of randomly chosen square
    _checkSurroundings = (row, col) => {
        for (let i = 0; i < this.surrounding.length; i++) {
            const sR = row + this.surrounding[i][0] 
            const cR = col + this.surrounding[i][1] 
            if (sR < 0 || sR > 9 || cR < 0 || cR > 9)  {
                continue
            } else if (this.board[sR][cR].hasShip()) {
                return false 
            }
        }
        return true 
    }

    _getRandomNum = (rangeEnd=10) => {
        return Math.floor(Math.random() * rangeEnd);
    }

    _shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    prettyPrint = () => {
        this.board.map(row => {
            console.log(row.map(cell => cell.ship ? "B" : cell.hit ? "X" : "#").join(""));
        })
    }
}
