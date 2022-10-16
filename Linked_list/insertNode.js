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



function insertAfter(prev_node, new_data) {
  /* 1. Check if the given Node is null */
  if (prev_node == null) {
    console.log("The given previous node cannot be null");
    return;
  }

  /* 2. Allocate the Node &
    3. Put in the data*/
  var new_node = new Node(new_data);

  /* 4. Make next of new Node as next of prev_node */
  new_node.next = prev_node.next;

  /* 5. make next of prev_node as new_node */
  prev_node.next = new_node;
}

insertAfter(second,"Post Beta");
printList();
insertAfter(third,"Post Gamma");
printList();