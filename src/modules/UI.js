/* GAME END LOGIC */
import { createElements, randomNumber } from "./Util";
import { Player } from "./Board";
import { AI } from "./AI";

const Nav = (() => {
    const navbar = document.querySelector("nav");
    const banner = navbar.querySelector(".nav-center span")

    const setBanner = (turn) => {
        return banner.innerHTML = `${turn}'s turn`;
    }

    const setBannerError = (message, lastPLayer) => {
        banner.innerHTML = `${message}`;
        banner.style.color = "maroon";
        setTimeout(() => {
            banner.style.color = "green";
            Nav.setBanner(lastPLayer);
        }, 700)
    }

    const setBannerWinner = (player) => {
        banner.innerHTML = `WINNNER ${player.name}`
    }
    
    return { setBanner, setBannerError, setBannerWinner}
})();

const renderBoard = (player) => {
    // size of columns and rows
    const SIZE = 10
    const container = createElements("div", { "class": `${player.name}-board` });

    const assemble = () => {
        [_makeTopLabel(), _makeLeftLabel(), _makeBoard(), _makeBottomLabel()].forEach(i => container.appendChild(i))
        return container
    }

    const _makeBoard = () => {
        const boardContainer = createElements("div", { "class": "board" });
        const playerBoard = player.board.getBoard()
        for (let r = 0; r < playerBoard.length; r++) {
            const row = createElements("div", { "class": "row", "data-row": `${r}`});
            for (let c = 0; c < playerBoard[r].length; c++) {
                const boardSqaure = playerBoard[r][c]
                const square = createElements("div", { 
                    "class": "square", 
                    "data-row": `${r}`,
                    "data-col": `${c}`, 
                    "data-ship": `${boardSqaure.ship}`, 
                    "data-hit": `${boardSqaure.hit}`, 
                    "data-player": `${player.name}` 
                })
                row.appendChild(square)
            }
            boardContainer.appendChild(row);
        }

        return boardContainer
    }


    const _makeTopLabel = () => {
        // returns first 10 chars of alphabet
        const alpha = Array.from({ "length": SIZE }, (_, i) => String.fromCharCode(65 + i));
        const container = createElements("div", { "class": "top" });
        alpha.forEach(char => {
            container.innerHTML += `<div class='top-label' id='${char.toLocaleLowerCase()}'>${char}</div>`;
        })
        return container
    }

    const _makeLeftLabel = () => {
        const nums = Array.from({ "length": SIZE }, (_, i) => i + 1)
        const container = createElements("div", { "class": "left" });
        nums.forEach(num => {
            container.innerHTML += `<div class='left-label' id='label-${num}'>${num}`;
        })
        return container
    }

    const _makeBottomLabel = () => {
        const container = createElements("div", { "class": "bottom" })
        if (player.name === "player") {
            container.innerHTML = `
                <span>${player.name}'s board</span>
                <div>
                    <button class="shuffle">Shuffle</button>
                </div>
            `
            container.querySelector(".shuffle").addEventListener("click", () => _shuffle());

            return container
        }
        container.innerHTML = `<span>${player.name}'s board</span>`
        return container
    }

    const _shuffle = () => {
        player.shuffleBoard();
        container.querySelector(".board").remove();
        const newBoard = _makeBoard();
        container.appendChild(newBoard);
    }

    const hideShuffle = () => {
        const shuffle = document.querySelector(".shuffle").parentElement
        shuffle.style.visibility = "hidden";
        shuffle.style.display = "none";
    }

    return { assemble, hideShuffle};
}

const playGame = (player, opponent) => {
    const playerMemory = player.memoryBoard
    const playerBoard = player.DOMboard

    const compMemory = opponent.memoryBoard
    const compBoard = opponent.DOMboard

    const ai = AI(playerMemory);

    const playerTurn = () => {
            const computerBoard = document.querySelectorAll('.computer-board .board .row');
            
            computerBoard.forEach(row => {
                const squares = row.querySelectorAll(".square");
                squares.forEach(square => {
                    square.addEventListener("click", (e) => {
                        const check = checkSquare(e.target, compMemory)
                        if (check === 1) {
                            playerBoard.hideShuffle();
                            Nav.setBanner(compMemory.name);
                            computerTurn();
                        } else if (check === 0) {
                            Nav.setBannerError("Square was already chosen", playerMemory.name);
                        } else if (check === 3) {
                            renderBoard.winner(playerMemory.name)
                        }
                    })
                })

            })
      };


    const computerTurn = () => {
        const playerRow = document.querySelectorAll(".player-board .row")
        const openSquares = playerMemory.board.getOpenSquares();

        let randomOpen, domSquare;

        if (ai.getLastHit().length) {
            const next = ai.getLastHit().shift()
            ai.directions.forEach(i => {
                const r = next[0] + i[0]
                const c = next[1] + i[1]

                if (r >= 0 && r < 10 && c >= 0 && c < 10 && !playerMemory.board.board[r][c].hit) {
                    ai.getNextUp().push([r,c]);
                }
            })

            if (!ai.getNextUp().shift) {
                randomOpen = playerMemory.board.findSquare(ai.getNextUp().shift())
                domSquare = playerRow[randomOpen.row].querySelectorAll(".square")[randomOpen.col];
            } else {
                /* RAND */
                randomOpen = openSquares[Math.floor(Math.random() * openSquares.length)]
                domSquare = playerRow[randomOpen.row].querySelectorAll(".square")[randomOpen.col];
            }
        } else if (ai.getNextUp().length) {
            const next = ai.getNextUp()
            randomOpen = playerMemory.board.findSquare(next.shift());
            domSquare = playerRow[randomOpen.row].querySelectorAll(".square")[randomOpen.col];
        } else {
            randomOpen = openSquares[Math.floor(Math.random() * openSquares.length)]
            domSquare = playerRow[randomOpen.row].querySelectorAll(".square")[randomOpen.col];
        }


        // const randomOpen = openSquares[Math.floor(Math.random() * openSquares.length)]
        // const domSquare = playerRow[randomOpen.row].querySelectorAll(".square")[randomOpen.col];

        // using a delay for computers turn
        setTimeout(() => {
            const code = checkSquare(domSquare, playerMemory)
            // 2 means a ship was hit so it proceeds with algorithm to try and get the rest of the ship
            if (code === 2) {
                ai.addLastHit([randomOpen.row, randomOpen.col])
                setTimeout(() => {
                    computerTurn();
                }, 500)
            } else {
                Nav.setBanner(playerMemory.name);
            }
        }, 500)

    }


    const setCorners = (row, col, player) => {
        const opponentBoard = (player === "computer") ? compMemory : playerMemory;
        const corners = [
            [-1, -1], [-1, 1],
            [1, -1], [1, 1],
        ]
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        // fill in corner pieces where a ship couldnt be
        corners.forEach(i => {
            const r = row + i[0]
            const c = col + i[1]
            

            if (r >= 0 && r < 10 && c >= 0 && c < 10 && !opponentBoard.board.board[r][c].hit) {
                const square = document.querySelectorAll(`.${opponentBoard.name}-board .row`)[r].querySelectorAll(".square")[c];
                const dot = createElements('span', { class: 'dot' });
                square.appendChild(dot);
                opponentBoard.board.board[r][c].hit = true
                square.setAttribute("data-hit", true);
            }
        })

        // get a map of other ships that have been clicked in the immediate area
        const others = directions.map(i => {
            const r = row + i[0]
            const c = col + i[1]
            if (r >= 0 && r < 10 && c >= 0 && c < 10 && opponentBoard.board.board[r][c].ship && opponentBoard.board.board[r][c].hit) {
                return [r,c]
            }
        }).filter(i => i != undefined);

        const surrounding = [...corners, ...directions]

        // this fills in any other places that couldnt contain a ship
        if (others.length) {
            surrounding.forEach(i => {
                const r = others[0][0] + i[0]
                const c = others[0][1] + i[1]
    
                if (r >= 0 && r < 10 && c >= 0 && c < 10 && !opponentBoard.board.board[r][c].ship &&  !opponentBoard.board.board[r][c].hit) {
                    const square = document.querySelectorAll(`.${opponentBoard.name}-board .row`)[r].querySelectorAll(".square")[c];
                    const dot = createElements('span', { class: 'dot' });
                    square.appendChild(dot);
                    opponentBoard.board.setHit(r, c);
                    square.setAttribute("data-hit", true);
                }
            })
        }

        // checks for ship that hasnt been click on and returns them in a list
        const remainingShips = directions.map(i => {
            const r = row + i[0]
            const c = col + i[1]

            if (r >= 0 && r < 10 && c >= 0 && c < 10 && opponentBoard.board.board[r][c].ship && !opponentBoard.board.board[r][c].hit) {
                return [r,c];
            }
        }).filter(i => i != undefined)

        // if list is empty cover all remaining sqaures
        if (!remainingShips.length) {
            surrounding.forEach(i => {
                const r = row + i[0]
                const c = col + i[1]
    
                if (r >= 0 && r < 10 && c >= 0 && c < 10 && !opponentBoard.board.board[r][c].ship &&  !opponentBoard.board.board[r][c].hit) {
                    const square = document.querySelectorAll(`.${opponentBoard.name}-board .row`)[r].querySelectorAll(".square")[c];
                    const dot = createElements('span', { class: 'dot' });
                    square.appendChild(dot);
                    opponentBoard.board.setHit(r, c);
                    square.setAttribute("data-hit", true);
                }
            })
        } 
    }



    const checkSquare = (square, player) => {
        let exit;

        const data = {
            row: Number(square.getAttribute('data-row')),
            col: Number(square.getAttribute('data-col')),
            hit: square.getAttribute('data-hit'),
            ship: square.getAttribute('data-ship'),
            player: square.getAttribute("data-player")
        };


        if (data.hit === 'false' && data.ship === "false") {
            const dot = createElements('span', { class: 'dot' });
            square.appendChild(dot);
            player.board.setHit(data.row, data.col);
            square.setAttribute("data-hit", true);
            // return 1 // no ship
            exit = 1
        } else if (data.ship === "true" && data.hit === "false") {
            const x = createElements("div", {"class": "x"});
            square.appendChild(x);
            square.setAttribute("data-hit", true);
            player.board.setHit(data.row, data.col);
            setCorners(data.row, data.col, data.player);
            // return 2 // ship
            exit = 2
        } else if (data.hit === 'true') {
            // return 0 // false
            exit = 0
        }

        // if (player.board.checkForWin()) {
        //     exit = 4
        //     console.log("WIN");
        // }

        return exit;
        // return true
    }

    playerTurn();
}


export const displayController = () => {
    const boardContainer = document.querySelector(".board-container");

    const player = new Player("player");
    const computer = new Player("computer");

    const playerBoard = renderBoard(player);
    const computerBoard = renderBoard(computer);

    boardContainer.appendChild(playerBoard.assemble());
    boardContainer.appendChild(computerBoard.assemble());

    playGame({"memoryBoard": player, "DOMboard": playerBoard}, {"memoryBoard": computer, "DOMboard": computerBoard});
}
