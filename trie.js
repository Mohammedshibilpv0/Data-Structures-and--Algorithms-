

class TreeNode{
    constructor(){
        this.children={}
        this.wordend=false
    }
}

class TRIE{
    constructor() {
        this.root=new TreeNode()
    }

    insert(word){
        let node=this.root
        for(let char in word){
            if(!node.children[char]){
                node.children[char]=new TreeNode()
            }
            node=node.children[char]
        }
        node.wordend=true
    }

    search(word){
        let node=this.root
        for(let char in word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.wordend
    }

}


let trie= new TRIE()
trie.insert('helo')
console.log(trie.findprefix('helo'));