class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class binaryTree{
    constructor(){
        this.root=null
    }

    insert(value){
        let node=new Node(value)
        if(this.root==null){
            this.root=node
        }else{
          this.insertValue(this.root,node)
        }
    }

    insertValue(node,value){
        if(node.left==null){
            node.left=value
        }else if(node.right==null){
            node.right=value
        }else{
            this.insertValue(node.left,value)
        }
    }

    print(){
         this.inorder(this.root)
    }

    inorder(node){
        if(node!==null){
            this.inorder(node.left)
            console.log(node.value);
            this.inorder(node.right)
        }

    }
    bst(){
       return this.isbst(this.root)
    }

    isbst(node){
        let arr=this.checking(node,[])
        for(let i=1; i<arr.length; i++){
            if(arr[i]<arr[i-1]) return false
        }
        return true
    }

    checking(node,arr){

        if(node!==null){
            this.checking(node.left,arr)
            arr.push(node.value)
            this.checking(node.right,arr)
        }
        return arr
    }

    delete(value){
     this.root =this.deletevalue(this.root,value)
    }

    deletevalue(node,value){
        if(node==null){
            return null
        }

        if(node.value>value){
            node.left=this.deletevalue(node.left,value)
        }
        else if(node.value<value){
            node.right=this.deletevalue(node.right,value)
        }else{
            if(!node.left && !node.right){
                return null
            }

            if(!node.right){
                return node.left
            }

            if(!node.left){
                return node.right
            }

            node.value=this.min(node.right)
            node.right=this.deletevalue(node.right,node.value)
        }
    return node

    }

    min(node){
        if(node.left==null){
            return node.value
        }

      return  this.min(node.left)
    }

    mins(root){
        let curr=root

        while(curr.left.left){
            curr=curr.left
        }
        return curr.value
    }
}

let bt=new binaryTree()
bt.insert(90)
bt.insert(10)
bt.insert(9000)

console.log(bt.mins(bt.root));