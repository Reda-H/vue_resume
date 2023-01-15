<template>
    <div class="maze-wrapper" ref="mazewrapper">
        <div v-for="(_, row) in maze.length" class="maze-rows" :key="`row-${row}`">
            <div v-for="(_, col) in maze[row].length" class="maze-col" :key="`row-${row}-col-${col}`">
                <MazeCell :row="row" :col="col" :value="maze[row][col]"/>
            </div>
        </div>
    </div>
    <button @click="start">start</button>
</template>
<script>
import { ref } from 'vue';
import MazeCell from './MazeComponents/MazeCell.vue';

export default {
    name: "MazeComponent",
    props: {
        rows: { type: Number, required: false, default: 30 },
        cols: { type: Number, required: false, default: 40 }
    },
    setup(props) {
        const mazewrapper = ref(null);
        let hasBeenSolved = false;
        let maze = [];
        let randomStart = {};
        let randomEnd = {};
        let getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
        maze = new Array(props.rows).fill(0).map(() => new Array(props.cols).fill(0).map(() => { let num = getRandomInt(5); return num === 0 ? "w" : num; }));
        randomStart = { row: getRandomInt(props.rows - 3), col: getRandomInt(props.cols - 3) };
        randomEnd = { row: (getRandomInt(props.rows)), col: (props.cols + getRandomInt(3) - 3) };
        do {
            randomStart = { row: getRandomInt(props.rows - 3), col: getRandomInt(props.cols - 3) };
            if (maze[randomStart.row][randomStart.col] != "w") {
                maze[randomStart.row][randomStart.col] = "s";
            }
        } while (maze[randomStart.row][randomStart.col] != "s");
        do {
            randomEnd = { row: (getRandomInt(props.rows)), col: (props.cols + getRandomInt(3) - 3) };
            if (maze[randomEnd.row][randomEnd.col] != "w" && maze[randomEnd.row][randomEnd.col] != "s") {
                maze[randomEnd.row][randomEnd.col] = "e";
            }
        } while (maze[randomEnd.row][randomEnd.col] != "e");
        let start = () => {
            walk(randomStart.row, randomStart.col);
        };
        let walk = async (row, col) => {
            // console.log(mazewrapper.value.children[row].children[col]);
            if (maze[row][col] === "e") {
                // console.log("we are done at", row, "", col);
                hasBeenSolved = true;
            }
            else if (maze[row][col] != "w") {
                if (hasBeenSolved)
                    return;
                if (maze[row][col] != "s") {
                    // mazewrapper.value.children[row].children[col].firstChild.firstChild.classList.add("visited");
                    maze[row][col] = "v";
                }
                // GO RIGHT
                if (col < maze[0].length - 1 && maze[row][col + 1] != "w" && maze[row][col + 1] != "v") {
                    walk(row, col + 1);
                }
                // GO LEFT
                if (col > 0 && maze[row][col - 1] != "w" && maze[row][col - 1] != "v") {
                    walk(row, col - 1);
                }
                // GO BOTTOM
                if (row < maze.length - 1 && maze[row + 1][col] != "w" && maze[row + 1][col] != "v") {
                    walk(row + 1, col);
                }
                // GO TOP
                if (row > 0 && maze[row - 1][col] != "w" && maze[row - 1][col] != "v") {
                    walk(row - 1, col);
                }
            }
        };
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        return {
            maze,
            randomStart,
            randomEnd,
            start,
            mazewrapper
        };
    },
    components: { MazeCell }
}
</script>
<style lang="css">
.maze-wrapper {
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
}

.maze-rows {
    display: flex;
    flex-direction: row;
}

.maze-cell {
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.501);
    width: 30px;
    height: 30px;
}

.maze-cell span {
    display: block;
    width: 100%;
    height: 100%;
}

.maze-cell:has(.wall) {
    box-sizing: border-box;
    border: 1px solid black;
    background-color: black;
    width: 30px;
    height: 30px;
}

.maze-cell:has(.start) {
    box-sizing: border-box;
    background-color: red;
    width: 30px;
    height: 30px;
}

.maze-cell:has(.end) {
    box-sizing: border-box;
    background-color: green;
    width: 30px;
    height: 30px;
}

.maze-cell:has(.visited) {
    transition: 0.5s;
    box-sizing: border-box;
    border: 1px solid yellow;
    background-color: yellow;
    width: 30px;
    height: 30px;
}
</style>