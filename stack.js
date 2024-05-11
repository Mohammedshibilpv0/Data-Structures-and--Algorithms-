

class Stack{
    constructor() {
        this.value=[]
    }

    isEmpty(){
        return this.value.length==0
    }

    push(value){
        this.value.push(value)
    }

    pop(){
        this.value.pop()
    }

    element(){
        return this.value[this.value.length - 1]
    }
}


let stack= new Stack()
stack.push(89)
stack.push(9)
stack.push(29)
stack.push(19)
stack.push(85)
// stack.pop()
console.log(stack.value)
console.log(stack.element());








class Stack{
    constructor() {
        this.value=[]
    }

    push(value){
    return this.value.push(value)
    }

    pop(){
        return this.value.pop()
    }

    curr(){
        return this.value[this.value.length-1]
    }
}

let s= new Stack()
s.push(40)
s.push(899)
s.push(66)
console.log(s.curr());


class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
        this.size=0
    }

    push(value){
      let node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
            this.size++
        }
    }

    pop(){
        this.head=this.head.next
    }

    print(){
        return this.head.value
    }

    all(){
        let result=[]
        let curr=this.head
        while(curr){
           result.push(curr.value)
            curr=curr.next
        }
        return result
    }
}

let stack= new Stack()
stack.push(30)
stack.push(90)
stack.push(78)
stack.push(13)
stack.pop()
console.log(stack.all());

