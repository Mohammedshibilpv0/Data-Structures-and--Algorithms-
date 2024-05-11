

class TreeNode{
    constructor(value) {
        this.value=value
        this.right=null
        this.left=null
    }
}


class BST{
    constructor() {
        this.root=null
    }

    insert(value){

        const node=new TreeNode(value)

        if(this.root===null){
            this.root=node
        }else{
            this.insertfValue(this.root,node)
        }
    }

    insertfValue(node,newNode){
        if(newNode.value < node.value){
            if(node.left===null){
                node.left=newNode
            }else{
                this.insertfValue(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode
            }else{
                this.insertfValue(node.right,newNode)
            }
        }
    }


    PrintpreOrder(){
        this.preOrder(this.root)
    }
    preOrder(node){
        if(node!=null){
            console.log(node.value)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    post(){
        this.postOrder(this.root)
    }
    postOrder(node){
        if(node!=null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.value);
        }
    }

    In(){
        this.inorder(this.root)
    }
    inorder(node){
        if(node!=null){
            this.inorder(node.left)
            console.log(node.value);
            this.inorder(node.right)
        }
    }

    min(){
        return this.findmin(this.root)
    }
    findmin(root){
        if(!root.left){
            return root.value
        }else{
            return this.findmin(root.left)
        }
    }

    max(){
        return this.findmax(this.root)
    }

    findmax(root){
        if(!root.right){
            return root.value
        }else{
            return this.findmax(root.right)
        }
    }
}

let bst=new BST()
bst.insert(100)
bst.insert(90)
bst.insert(121)
bst.insert(93)
bst.insert(101)
bst.insert(30)
bst.insert(23)
console.log(bst.max());






class TreeNode{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class BST{
    constructor() {
        this.root=null
    }

    insert(value){
        let node=new TreeNode(value)
        if(this.root==null){
            this.root=node
        }else{
            this.insertValue(this.root,node)
        }
    }

    insertValue(node,newnode){

        if(newnode.value<node.value){
            if(node.left==null){
                node.left=newnode
            }else{
                this.insertValue(node.left,newnode)
            }
        }else{
            if(node.right==null){
                node.right=newnode
            }else{
                this.insertValue(node.right,newnode)
            }
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root==null){
            return root
        }

        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }

       else if(root.value<value){
            root.right=this.deleteNode(root.right,value)
        }else{

            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }
            if(root.right){
                return root.left
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
return root

    }

    min(node){
        if(node.left==null){
            return node.value
        }
        return this.min(node.left)
    }


    inorder(node){
        let arr=[]
        if(node!==null){
            this.inorder(node.left)
            arr.push(node.value)
            this.inorder(node.right)

        }
        console.log(arr);
        return arr
    }

    inorder(){
        this.in(this.root)
    }

in(node){
    if(node!==null){
        this.in(node.left)
        console.log(node.value);
        this.in(node.right)
    }
}

   isbstS(){
   return this.checkisbst(this.root)
   }

   checkisbst(root){
    let arr=this.inorder(root)
    for(let i=1; i<arr.length; i++){
        if(arr[i]<arr[i-1]) return false
    }
    return true
   }

   print(){
   console.log(this.root);
   }

   height(){
    return this.findheight(this.root)
   }

   findheight(root){
    if(root==null){
        return 0
    }
    return Math.max(1+this.findheight(root.left),1+this.findheight(root.right))
   }

}

let bst=new BST()
bst.insert(90)
bst.insert(70)
bst.insert(91)
bst.insert(80)
bst.insert(100)
bst.insert(8000)
bst.insert(2)
bst.insert(1)
bst.insert(0)
bst.insert(60)
bst.delete(100)
bst.inorder()
console.log(bst.height());


