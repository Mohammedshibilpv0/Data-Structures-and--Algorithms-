let arr=[10,6,7,56,3,2,1]

function bubble(arr){
    let n=arr.length

    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}

bubble(arr)
console.log(arr);

