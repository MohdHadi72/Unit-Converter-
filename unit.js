let item = document.getElementById('feet');
let num = document.getElementById('inch');


feet.addEventListener('input',function(){
 let f = this.value;
 let i = f * 12;
 
 
 if(!Number.isInteger(i)){
    i = i.toFixed(1);


}


num.value = i;


});

num.addEventListener('input',function(){
    let i = this.value;
    let f = i / 12;
    if(!Number.isInteger(f)){
        f = f.toFixed(1);
    }
    feet.value = f;
   
},false);





                       