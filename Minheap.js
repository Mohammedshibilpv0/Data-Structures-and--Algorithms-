
class minheap{
    constructor(){
        this.heap=[]
    }


    insert(value){
        this.heap.push(value)
        this.hepifyUp(this.heap.length-1)
    }

    hepifyUp(index){
        let parentIndex=Math.floor((index-1)/2)

        if(index==0 || this.heap[parentIndex]<this.heap[index]){
            return
        }

        [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
        this.hepifyUp(parentIndex)
    }

    delete(){
        let min=this.heap[0]
        let lastelement=this.heap.pop()

        this.heap[0]=lastelement
        this.hepifydown(0)
        return min
    }

    hepifydown(index){
        let left=2*index+1
        let right=2*index+2
        let min=index

        if(left<this.heap.length&& this.heap[left]<this.heap[min]){
            min=left
        }

        if(left<this.heap.length && this.heap[right]<this.heap[min]){
            min=right
        }

        if(min!==index){
            [this.heap[index],this.heap[min]]=[this.heap[min],this.heap[index]]
            this.hepifydown(min)
        }
    }

    print(){
        console.log(this.heap);
    }
}


let heap=new minheap()
heap.insert(90)
heap.insert(1)
heap.delete()
heap.print()