/**
 * @param {number[]} nums
 * @return {number}
 */
let nums=new Array(1,2,3);
findRepeatNumber(nums);

function findRepeatNumber(nums) {
    let setNum=new Set();
    let returnValue=-1;
    for(let num of nums){
        if(!setNum.has(num)){
            let returnvalue=setNum.add(num);
            console.log(returnvalue);
        }else{
            returnValue=num;
            break;
        }
    }
    return returnValue
};