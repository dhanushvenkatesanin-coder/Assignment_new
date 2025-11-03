function fun1(){
    console.log("Hi I am dhanush");
    
}
function fun2(callback){
    console.log("from ramapuram");
    setTimeout(function(){
        console.log("currently reside in guindy");
        callback();
        },5000)
    
}
fun2(fun1)