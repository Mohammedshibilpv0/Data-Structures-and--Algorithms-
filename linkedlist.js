

// Linked list


class  Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{
    constructor() {
        this.head=null,
        this.size=0
    }
    isempty(){
        return this.size==0
    }
    getsize(){
        return this.size
    }



prepend(value){
    const node=new Node(value)
    if(this.isempty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++

}

print(){
    if(this.isempty()){
        console.log("The list is empty");
    }else{
        let curr=this.head
        let listvalue=""
        while(curr){
            listvalue+=` ${curr.value}`
            curr=curr.next
        }
        console.log(listvalue);
    }
}

}
let list=  new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.print()
