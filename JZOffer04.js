/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let matrix=[[-5]];
let target=-5;

findNumberIn2DArray(matrix,target);

function findNumberIn2DArray(matrix, target) {
    if(matrix.length==0||matrix[0].length==0||matrix==null){
        return false;
    }
    let rows=matrix.length;
    let clos=matrix[0].length;
    let row=0;
    let clo=matrix[0].length-1;
    while(row<rows&&clo>=0){
        if(matrix[row][clo]==target){
            return true;
        }else if(matrix[row][clo]>target){
            clo--;
        }else if(matrix[row][clo]<target){
            row++;
        }
    };
    return false;
};
