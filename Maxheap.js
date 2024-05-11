
class HeapMax{
    constructor() {
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.heapify(this.heap.length-1)
    }

    heapify(index){

        let parentIndex=Math.floor((index-1)/2)

        if(index==0||this.heap[parentIndex]>=this.heap[index]){
            return
        }

        [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
        this.heapify(parentIndex)
    }

    print(){
        console.log(this.heap);
    }

    delete(){
        if(this.heap.length<0){
            return null
        }

        let maxvalue=this.heap[0]
        let lastelement=this.heap.pop()

        if(this.heap.length>0){
            this.heapifydown(lastelement)
        }
        return maxvalue
    }

    heapifydown(index){
        let left=2*index+1
        let right=2*index+2
        let large=index

        if(left<this.heap.length && this.heap[left]>this.heap[large]){
            large=left
        }
        if(right<this.heap.length && this.heap[right]>this.heap[large]){
            large=right
        }

        if(index!==large){
            [this.heap[index],this.heap[large]]=[this.heap[large],this.heap[index]]
            this.heapifydown(large)
        }
    }

}

let maxheap=new HeapMax()
maxheap.insert(200)
maxheap.insert(300)
maxheap.insert(4000)
maxheap.insert(700)
maxheap.delete()
maxheap.print()

