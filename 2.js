/**
Q: https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
     if(l1==null) {
         l1 = new ListNode(0,null);
     }
     if(l2==null) {
         l2 = new ListNode(0,null);
     }
    const add = l1.val+l2.val;
    var l3 = new ListNode(add);
    if(l1.next != null || l2.next !=null) {
        if(l3.val > 9) {
            // carry handlers
            l3.val = l3.val%10;
            if(l2.next != null) {
                l2.next.val++;
            } else if(l1.next != null)  {
                l1.next.val++;
            }
        }
    l3.next = addTwoNumbers(l1.next,l2.next, 1);
    } else if(l3.val > 9) {
        // carry handlers
        return (new ListNode(l3.val%10,new ListNode(1,null)));
    }
    // if(r==0) {
    // add a parameter r = 0
    // remove carry handlers
    //     return manageCarry(l3);
    // }
    return l3;
};

// var manageCarry = function(l3) {
//     if(l3.val > 9) {
//         l3.val = l3.val%10;
//         if(l3.next!=null) {
//             l3.next.val++;
//         } else {
//             l3.next = new ListNode(1,null);
//         }
//     }
//     var l4 = new ListNode(l3.val);
//     if(l3.next != null ) {   
//         l4.next = manageCarry(l3.next);
//     }
//     return l4;
// }
