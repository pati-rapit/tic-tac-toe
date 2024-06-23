<script lang="ts">
    import '../app.css';

    const initBoard = () => {
        return [
            0,0,0,
            0,0,0,
            0,0,0
        ];
    }

    let board: number[] = initBoard();
    let player = 1;
    let winMessage = 'tic tac toe';
    let complated = false;

    let history: number[] = [];

    const reset = () => {
        board = initBoard();
        player = 1;
        winMessage = 'tic tac toe';
        history = [];
        complated = false;
    }

    const changePlayer = () => {
        if (player == 1) {
            player = 2;
        } else {
            player = 1;
        }
    }

    const displayMass = (mass: number) => {
        if (mass == 1) {
            return '○';
        } else if (mass == 2) {
            return '×';
        } else { 
            return '';
        }
    }

    const writeWinMessage = () => {
        if (winPlayer(1)) {
            winMessage = displayMass(1) + 'の勝ちです';
            complated = true;
            return;
        }

        if (winPlayer(2)) {
            winMessage = displayMass(2) + 'の勝ちです';
            complated = true;
            return;
        }

        winMessage = 'tic tac toe';
    }

    const winPlayer = (player: number) => {
        // 行の判定
        if (board[0] == player && board[1] == player && board[2] == player) {
            return true;
        }
        if (board[3] == player && board[4] == player && board[5] == player) {
            return true;
        }
        if (board[6] == player && board[7] == player && board[8] == player) {
            return true;
        }

        // 列の判定
        if (board[0] == player && board[3] == player && board[6] == player) {
            return true;
        }
        if (board[1] == player && board[4] == player && board[7] == player) {
            return true;
        }
        if (board[2] == player && board[5] == player && board[8] == player) {
            return true;
        }
        
        // 斜めの判定
        if (board[0] == player && board[4] == player && board[8] == player) {
            return true;
        }

        if (board[2] == player && board[4] == player && board[6] == player) {
            return true;
        }

        return false;

    }

    const deleteMass = (index: number) => {
        if (history.length >= 6) {
            const first = history.shift();
            history = history;
            if (first != undefined) {
                board[first] = 0;
            }
        }
        
        history.push(index);
        history = history;
    }

    const clickMass = (index: number) => {
        if (complated) {
            return;
        }


        if (board[index] != 0) {
            return;
        }

        deleteMass(index);
        board[index] = player;
        changePlayer();
        writeWinMessage();
    }

    const isNextDelete = (history: number[], index: number) => {
        if (history.length <= 5) {
            return false;
        }


        if (history[0] == index) {
            console.log('aaaa')
            return true;
        }

        return false;
    }


</script>

<h1 class="text-6xl">{winMessage}</h1>
<button
    class="bg-blue-700 text-white rounded-md py-4 px-8 my-4"
    on:click={reset}
>
    リセット
</button>
<span class="text-xl">{player == 1 ? '○' : '×'}の手番です</span>

<div class="flex flex-wrap">
    {#each board as mass, index}
        <button
            class="border border-black w-1/3 h-36 text-center text-4xl font-bold hover:bg-yellow-200"
            class:bg-gray-400 = {player == 1 ? isNextDelete(history, index) : isNextDelete(history, index)}
            on:click={()=>{clickMass(index)}}
        >
            {displayMass(mass)}
        </button>
    {/each}
</div>

