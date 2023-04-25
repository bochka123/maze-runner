export function mazeRunner(maze:number[][], directions:string[]): string{
    let x: number = 0;
    let y: number = 0;
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === 2) {
                x = j;
                y = i;
            }
        }
    }
    for (let i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case 'N':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'S':
                y++;
                break;
            case 'W':
                x--;
                break;
        }
        if (x < 0 || y < 0 || x > maze[0].length-1 || y > maze.length-1 || maze[y][x] === 1) {
            return 'Dead';
        }
        if (maze[y][x] === 3) {
            return 'Finish';
        }
    }
    return 'Lost';
}