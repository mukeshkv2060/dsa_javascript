let head;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

head = new Node("Alpha");
let second = new Node("Beta");
let third = new Node("Gamma");
head.next = second;
second.next = third;

function push(new_data) {
  /* 1 & 2: Allocate the Node &
              Put in the data*/
  var new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}
// Display Linked list
function printList() {
  let n = head;
  while (n != null) {
    console.log(n.data + " ");
    n = n.next;
  }
}
push("pre-alpha");
printList();