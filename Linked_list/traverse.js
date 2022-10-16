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

printList();