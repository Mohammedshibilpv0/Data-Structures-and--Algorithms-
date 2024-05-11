// febnacci sequence

function febnacci(n){
    let arr=[0,1]
    for(let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}

console.log(febnacci(6));
// Big o   o(n)



//Factorial Number

function Factorial(n){

    let result=1
    for(let i=2;i<=n;i++){
        result*=i

    }
    return result

}
console.log(Factorial(5));
O(n)


//primenumber

function prime(n){

    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(prime(5));
O(n)

