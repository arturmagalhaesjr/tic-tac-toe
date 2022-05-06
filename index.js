const cells = Array.from(document.getElementsByClassName('cell'));
const spaces = Array.from(document.getElementsByClassName('cell')).map(() => null);
const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';
let currentPlayer = PLAYER_ONE;

const reload = () => {
    spaces.map((__, index) => {
        spaces[index] = null;
    })
    document.getElementById("title").innerHTML = `Let's play`;
    currentPlayer = PLAYER_ONE;
    cells.map(cell => cell.innerHTML = '');
}

const checkIfGameIsOver = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            return true
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            return true
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            return true
        }
    }

    if (spaces[2] === currentPlayer) {
        if (spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
            return true
        }
        if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
            return true
        }
    }

    if (spaces[3] === currentPlayer) {
        if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
            return true
        }
    }

    if (spaces[6] === currentPlayer) {
        if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
            return true
        }
    }
    if (spaces[1] === currentPlayer) {
        if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
            return true
        }
    }

    return false

}
const onCellClick = (event) => {
    if (spaces[event.target.id]) {
        return
    }
    event.target.innerHTML = currentPlayer;

    spaces[event.target.id] = currentPlayer;
    if (checkIfGameIsOver()) {
        document.getElementById("title").innerHTML = `${currentPlayer} wins!`;
        return;
    }
    currentPlayer = currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
}

cells.forEach((cell, index) => {
    let styleProp = "";
    if (index < 3) {
        styleProp += "border-bottom: 2px solid var(--color-primary);";
    }

    if (index % 3 === 0) {
        styleProp += "border-right: 2px solid var(--color-primary);";
    }

    if (index % 3 === 2) {
        styleProp += "border-left: 2px solid var(--color-primary);";
    }

    if (index > 5) {
        styleProp += "border-top: 2px solid var(--color-primary);";
    }

    cell.style = styleProp;
    cell.addEventListener('click', onCellClick)
})

document.getElementById("reloadBtn").addEventListener('click', reload)

reload();
