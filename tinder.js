
// sorted linked list, no duplicates. 1 -> 3 -> 5 -> 7

// output: complete binary search tree.

//   5
//  3 7
// 1

//  3
// 1 5
//    7



//    0
//  0   0
// 0


  

function ll_node(val) {
  this.val = val
  this.next = null
}

function tree_node(val) {
  this.val = val
  this.left = null
  this.right = null
}

let createBST = (head) => {
  // if (head.next === null) retur

  let tree = new tree_node(0)  
  let treePointer = tree

  let used = [tree]

  head = head.next
  
  let currentNode = used.shift()
  while (head !== null) {    
    if (!currentNode.left) {
      currentNode.left = new tree_node(0)
      used.push(currentNode.left)
    } else if (!currentNode.right) {
      currentNode.right = new tree_node(0)
      used.push(currentNode.right)
    } 
    
    if (currentNode.left && currentNode.right) {
      currentNode = used.shift()
    }
    head = head.next
  }
  
  return treePointer
}


  
let swap = (a,b) => {
  let temp = a.val
  a.val = b.val
  b.val = temp
}

let head = new ll_node(null)
let headPointer = head
head.next = new ll_node(1)
head = head.next
head.next = new ll_node(3)
head = head.next
head.next = new ll_node(5)
head = head.next
head.next = new ll_node(7)
head = head.next

//works
let inOrder = (tree) => {
  if (!tree) return
  if (tree.left && tree.left.val === 0) inOrder(tree.left)
  console.log(head.val)
  tree.val = head.val
  head = head.next
  if (tree.right && tree.right.val === 0) inOrder(tree.right)
}

// console.log(headPointer.next)

let bst = createBST(headPointer.next)
console.log(bst)
head = headPointer.next
inOrder(bst)

console.log(bst)