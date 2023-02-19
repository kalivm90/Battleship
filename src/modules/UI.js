/* START AT PLAYER TURN IN RENDER BOARD */
import Dot from "../assets/images/dot.png"


import { createElements } from "./Util";
import { Player } from "./Game";

const Nav = (() => {
    const navbar = document.querySelector("nav");

    const setBanner = (turn) => {
        const banner = navbar.querySelector(".nav-center span")
        return banner.innerHTML = `${turn}'s turn`;
    }

    return { setBanner }
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
            const row = createElements("div", { "class": "row", "data-index": `${r}` })
            for (let c = 0; c < playerBoard[r].length; c++) {
                const boardSqaure = playerBoard[r][c]
                const square = createElements("div", { "class": "square", "data-index": `${c}`, "data-ship": `${boardSqaure.ship}`, "data-hit": `${boardSqaure.hit}`, "data-player": `${player.name}`})
                row.appendChild(square)
            }
            boardContainer.appendChild(row);
        }

        return boardContainer
    }

    const playerTurn = (player) => {
        const board = player === "player" ? document.querySelectorAll(`.computer-board .board .row`) : document.querySelectorAll(`.player-board .board .row`)

        board.forEach((row) => {
            const squares = row.querySelectorAll(".square");
            squares.forEach((square) => {
                square.addEventListener("click", (e) => {
                    const [rowNum, colNum] = [row.getAttribute("data-index"), e.target.getAttribute("data-index")];

                    if (e.target.getAttribute("data-ship") === "true") {
                        // console.log("hello")
                        e.target.style.backgroundColor = "yellow"
                    } else {
                        const dot = createElements("span", { "class": "dot" })
                        e.target.appendChild(dot)
                        e.target.id += "hit";
                    }
                    // if (e.target.getAttribute("data-ship")) {
                    //     console.log("hello")
                    // } else {
                    //     const dot = createElements("span", { "class": "dot" })
                    //     e.target.appendChild(dot)
                    //     e.target.id += "hit";
                    // }
                })
            })
        })
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
        console.log(player.name)
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

    const getBoard = () => {
        let array = []
        const rows = container.querySelectorAll(".row");
        rows.forEach(i => {
            let squares = [];
            squares.push(...i.querySelectorAll(".square"));
            array.push(squares);
        })
        return array
    }
    return { assemble, getBoard, playerTurn };
}

export const displayController = () => {
    const boardContainer = document.querySelector(".board-container");

    const player = new Player("player");
    const computer = new Player("computer");

    const playerBoard = renderBoard(player);
    const computerBoard = renderBoard(computer);

    boardContainer.appendChild(playerBoard.assemble());
    boardContainer.appendChild(computerBoard.assemble());

    const Game = () => {

        let turn = player.name;

        Nav.setBanner(turn);
        playerBoard.playerTurn(turn);
    }

    Game();
}

