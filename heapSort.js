class HeapMax{
    constructor() {
        this.heap=[]
    }

    insert(value){

        this.heap.push( value)
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        let parentIndex=Math.floor((index-1)/2)

        if(index==0 || this.heap[parentIndex]>=this.heap[index]){
            return
        }

        [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
        this.heapifyUp(parentIndex)
    }

    delete(){
        let maxelement=this.heap[0]
        let lastelement=this.heap.pop()

        this.heap[0]=lastelement
        this.heapifydown(0)

        return maxelement
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

function heapSort(arr){
    let heap= new HeapMax()
    for(let i=0; i<arr.length; i++){
        heap.insert(arr[i])
    }

    for(let i=arr.length-1; i>=0; i--){
       arr[i]= heap.delete()
    }
    return arr
}

let arr=[90,66,2,2555,78,90]

console.log(heapSort(arr));