class Node {
    constructor(value) {
        this.value=value
        this.next=null
    }
}


class linkedList{
    constructor() {
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    palindrome(){

        let slow=this.head
        let fast=this.head

        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }

        let lastHalf=this.reverse(slow)
        let firstHalf=this.head

        while(lastHalf&&firstHalf){
            if(lastHalf.value!=firstHalf.value){
                console.log("false");
                return
            }
            lastHalf=lastHalf.next
            firstHalf=firstHalf.next
        }
        console.log("True");
    }


    reverse(head){
        let curr=head
        let prev=null

        while(curr){
            let temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp
        }
        return prev
    }

    print(){
        let curr=this.head
        while(curr.next!=null){
            console.log(curr.value);
            curr=curr.next
        }
    }
}

let list= new linkedList()
list.append(10)
list.append(20)
list.append(20)
list.append(10)
// list.append(100)
// // list.print()
list.palindrome()

