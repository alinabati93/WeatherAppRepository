function log(message){
    console.log(message);
}
var msg='hello world';
//log(msg);

function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log("finally: " + i);
}
doSomething();
