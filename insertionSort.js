

function insertionSort(arr){

    let n=arr.length;

    for(let i=1; i<n; i++){
        let temp=arr[i]
        let j
        for( j=i-1;j>=0&&arr[j]>temp; j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=temp
    }
}


insertionSort(arr)
console.log(arr);
