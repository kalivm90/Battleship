export const AI = (opponent) => {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const lastHit = [];
    const nextUp = [];

    const addLastHit = (value) => {
        lastHit.push(value)
    }

    const getLastHit = () => {
        return lastHit
    }

    const getNextUp = () => {
        return nextUp
    }

    const getDirections = () => {
        const next = lastHit.shift();
        return directions.map(i => {
            const r = next[0] + i[0]
            const c = next[1] + i[1]

            if (r >= 0 && r < 10 && c >= 0 && c < 10 && !opponent.board.board[r][c].hit) {
                return [r,c];
            }
        }).filter(i => i != undefined);
    }

    const recommendedMoves = () => {
        if (lastHit.length) {
            const next = lastHit.shift();
            const possible = directions.map(i => {
                const r = next[0] + i[0]
                const c = next[1] + i[1]

                if (r >= 0 && r < 10 && c >= 0 && c < 10 && !opponent.board.board[r][c].hit) {
                    return [r,c]
                }
            }).filter(i => i!==undefined);

            possible.forEach(i => nextUp.push(i));

            return possible;
        }
        return nextUp;
    }
    
    return {addLastHit, getLastHit, getNextUp, recommendedMoves, getDirections, directions};
}