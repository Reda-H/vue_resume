<template>
    <div>
        mazebuilder
        <button @click="iterative(0, 0)">solve</button>
        <div v-for="(_, row) in maze" class="maze-row">
            <div v-for="(_, col) in maze[row]" class="maze-col">
                <div class="maze-cell" :class="{
                    'visited': maze[row][col].visited, 'wall-top': maze[row][col].wallTop,
                    'wall-right': maze[row][col].wallRight,
                    'wall-bottom': maze[row][col].wallBottom,
                    'wall-left': maze[row][col].wallLeft
                }"></div>
                <!-- {{ row + '-' + col + '-' +  maze[row][col].visited }} -->
            </div>
            <br />
        </div>
    </div>
</template>
<script>
export default {
    name: "MazeBuilder",
    data() {
        let maze = new Array(150).fill(0).map((_, row) => new Array(200).fill(0).map((_, col) => ({ row, col, visited: false, wallTop: true, wallRight: true, wallBottom: true, wallLeft: true })));
        let checkNeighbourTop = (current) => {
            if (current.row === 0 || maze[current.row - 1][current.col].visited) {
                return false;
            } else return true;
        }
        let checkNeighbourRight = (current) => {
            console.log('current.col', current.col)
            console.log('maze[current.row].length - 1', maze[current.row].length - 1)
            if (current.col === maze[current.row].length - 1 || maze[current.row][current.col + 1].visited) {
                return false;
            } else return true;
        }
        let checkNeighbourBottom = (current) => {
            if (current.row === maze.length - 1 || maze[current.row + 1][current.col].visited) {
                return false;
            } else return true;
        }
        let checkNeighbourLeft = (current) => {
            if (current.col === 0 || maze[current.row][current.col - 1].visited) {
                return false;
            } else return true;
        }

        let getNeighbourTop = (current) => {
            return maze[current.row - 1][current.col];
        }

        let getNeighbourRight = (current) => {
            return maze[current.row][current.col + 1];
        }

        let getNeighbourBottom = (current) => {
            return maze[current.row + 1][current.col];
        }

        let getNeighbourLeft = (current) => {
            return maze[current.row][current.col - 1];
        }

        return {
            maze,
            checkNeighbourTop,
            checkNeighbourRight,
            checkNeighbourBottom,
            checkNeighbourLeft,
            getNeighbourTop,
            getNeighbourRight,
            getNeighbourBottom,
            getNeighbourLeft
        };
    },
    methods: {
        iterative: async function (startRow, startCol) {
            const wait = t => new Promise(r => setTimeout(r, t));
            let stack = new Array();
            this.maze[startRow][startCol].visited = true;
            stack.push(this.maze[startRow][startCol]);
            let interval = 500;
            let promise = Promise.resolve()
            while (stack.length != 0) {
                // await wait(50);
                let current = stack.pop();
                if (this.checkNeighbourTop(current) || this.checkNeighbourRight(current) || this.checkNeighbourBottom(current) || this.checkNeighbourLeft(current)) {
                    stack.push(current);
                    let chosen = {};
                    if (this.checkNeighbourTop(current)) {
                        current.wallTop = false;
                        chosen = this.getNeighbourTop(current)
                        chosen.wallBottom = false;
                    } else if (this.checkNeighbourRight(current)) {
                        current.wallRight = false;
                        chosen = this.getNeighbourRight(current)
                        chosen.wallLeft = false;
                    } else if (this.checkNeighbourBottom(current)) {
                        current.wallBottom = false;
                        chosen = this.getNeighbourBottom(current)
                        chosen.wallTop = false;
                    } else if (this.checkNeighbourLeft(current)) {
                        current.wallLeft = false;
                        chosen = this.getNeighbourLeft(current)
                        chosen.wallRight = false;
                    }
                    // this.sleep(1000);
                    chosen.visited = true;
                    stack.push(chosen);
                }
            }
            console.log(this.maze);
        },
        
        sleep: function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}
</script>
<style lang="css">
.maze-col {
    display: flex;
    flex-direction: column;
}

.maze-row {
    display: flex;
    flex-direction: row;
}

.maze-cell {
    height: 4px;
    width: 4px;
    background-color: yellow;
    border: none;
}

.maze-cell.visited {
    background-color: blue;
}

.maze-cell.wall-top {
    border-top: 1px solid black;
}

.maze-cell.wall-right {
    border-right: 1px solid black;

}

.maze-cell.wall-bottom {
    border-bottom: 1px solid black;

}

.maze-cell.wall-left {
    border-left: 1px solid black;

}
</style>