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

function appendNode(new_data) {
  let new_node = new Node(new_data);

  // check if head is null : means there is no item
  if (head == null) {
    head = new_node;
    return;
  }
  let last_node = head;
  while (last_node.next != null) {
    last_node = last_node.next;
  }
  last_node.next = new_node;
  return;
}
appendNode("Delta")
printList();
