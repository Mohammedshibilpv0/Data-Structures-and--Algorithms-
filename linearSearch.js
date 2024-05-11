
function linearsearch(value,target){
    for(let i=0; i<value.length; i++){
        if(value[i]===target){
            return i
        }
    }

    return -1
}

console.log(linearsearch([1,23,45,8],6));

console.log(linearsearch([1,23,45,8],8));

console.log(linearsearch([1,23,45,8],45));





// class Node{
//     constructor(value){
//         this.value=value
//         this.prev=null
//         this.next=null
//     }
// }


// class linkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     insertF(value){
//         let node = new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//         }
//     }

//     print(){
//         let curr= this.head
//         while(curr){
//             console.log(curr.value);
//             curr=curr.next
//         }
//     }
// }

// let list=new linkedList()
// list.insertF(90)
// list.insertF(66)
// list.print()




// class  Node{
//     constructor(value) {
//         this.value=value
//         this.prev=null
//         this.next=null
//     }
// }


// class linkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     end(value){
//         let node= new Node(value)

//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//         }
//     }

//     print(){
//         let curr=this.tail

//         while(curr){
//             console.log(curr.value);
//             curr=curr.prev
//         }
//     }
// }


// let list = new linkedList()
// list.end(200)
// list.end(888)
// list.end(78)
// list.print()


