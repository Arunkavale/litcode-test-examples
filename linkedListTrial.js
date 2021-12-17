class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(value) {
        let previousNodes = this.head;
        this.head = new Node(value);
        this.head.next = previousNodes;
        return this;
    }

    insert(index, value) {
        let node = new Node(value);
        let leader = this.traverseList(index-1 ); 
        let holdingPointers = leader.next;
        leader.next = node;
        node.next = holdingPointers;
        this.length++;
        return this;
    }

    traverseList(index){
        if(index === 0) return this.head;
        if(index >= this.length) index = this.length - 1;

        let currentNode = this.head;
        let count = 0;
        while (count !== index) {
            currentNode = currentNode.next;
            count++
        }
        return currentNode;
    }

    printList(){
        let currentNode = this.head;
        let array = [];
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(40);
myLinkedList.append(60);
myLinkedList.append(40);
myLinkedList.insert(2, 80);
myLinkedList.insert(1, 100);
myLinkedList.insert(3, 00);
// myLinkedList.insert(2, 80);
myLinkedList.printList();