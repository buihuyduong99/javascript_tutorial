// var fs =[];
// for(i = 0; i < 10; i++){
//     fs.push(function(){
//         console.log(i);
//     })
// }
// fs.forEach(function(f){
//     f();
// })

// var fs = [];
// function cb(i){
//     console.log(i);
// }
// for(i = 0; i <10 ; i++){
//     fs.push(cb);
// }
//     fs.forEach(function(f,i){
//         f(i);
//     })
var fs = [];
var cb = i => console.log(i);
for (i =0; i<10; i++){
    fs.push(cb);
}
    fs.forEach((f, index)=>
        f(index)
    )


var array = [];
for (i = 0; i < 10; i++) {
    array.push(i);
}
array.forEach(function (a, b) {
    console.log(`value=${a}, index=${b}`);
})
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}


$("#target").click(handlerClick());

  var handlerClick =()=>
      alert("Handler for .click() called.");