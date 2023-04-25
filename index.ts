import { mazeRunner } from './mazeRunner';

const maze =
    [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]];

const directions = ["N","N","N","N","N","E","E","E","E","E"];

console.log(mazeRunner(maze, directions));