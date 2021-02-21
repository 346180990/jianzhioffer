/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    if (head === null) return []
    let array=[];
    while(head){
        array.push(head.val);
        head =head.next;
    }
    return array.reverse();
};