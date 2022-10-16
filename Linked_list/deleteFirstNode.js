
let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
function printList() {
  let n = head;
  while (n != null) {
    console.log(n.data + " ");
    n = n.next;
  }
}

head = new Node("Alpha");
let second = new Node("Beta");
let third = new Node("Gamma");
head.next = second;
second.next = third;

function deleteNode(key) {
    // Store head node
    var temp = head, prev = null;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.data == key) {
        head = temp.next; // Changed head
        return;
    }

    // Search for the key to be deleted, keep track of
    // the previous node as we need to change temp.next
    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }

    // If key was not present in linked list
    if (temp == null)
        return;

    // Unlink the node from linked list
    prev.next = temp.next;
}
deleteNode("Beta")
printList();