
function reverse(str){
    if(str===""){
        return ""
    }else{

        return reverse(str.substr(1))+str.charAt(0)
    }
}




let str="helo"
let result=reverse(str)
console.log(result);

