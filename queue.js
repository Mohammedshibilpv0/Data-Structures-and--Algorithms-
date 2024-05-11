class queue{
    constructor() {
        this.value=[]
    }

    enqueue(value){
        this.value.push(value)
    }
    dequeue(){
        this.value.shift()
    }
    size(){
        return this.value.length
    }
}

let q=new queue()
q.enqueue(40)
q.enqueue(80)




class Node {
    constructor(value) {
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.head=null
        this.rear=null
        this.size=0
    }

    enqueue(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node

        }
        this.size++
    }

    dequeue(){
        if(this.size==1){
            this.head=null
            this.rear=null
        }else{
            this.head=this.head.next
        }
    }

    print(){
        let arr=[]
        let curr=this.head
        while(curr){
            arr.push(curr.value)
            curr=curr.next
        }
        console.log(arr.join(' '));
    }
}

let queue= new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
// queue.dequeue()
queue.print()


