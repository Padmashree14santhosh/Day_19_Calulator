

// function show(){
//     let val=document.querySelector("#inputid");
//     val.value+=val;
// }

// function clear(){
//     let deleteid = document.getElementById("clearid");
//     deleteid.value = null;
//  }

//  function one(){
//      let onenum=document.getElementById("inputid");
//      onenum.value+=1;
//  }

//  function two(){
//     let twonum=document.getElementById("inputid");
//     twonum.value+=2;
// }

// function three(){
//     let threenum=document.getElementById("inputid");
//     threenum.value+=3;
// }

// function add(){
//     let addnum=document.getElementById("inputid");
//     addnum.value+="+";
// }

// function four(){
//     let fournum=document.getElementById("inputid");
//     fournum.value+=4;
// }

// function five(){
//     let fivenum=document.getElementById("inputid");
//     fivenum.value+=5;
// }

// function six(){
//     let sixnum=document.getElementById("inputid");
//     sixnum.value+=6;
// }

// function sub(){
//     let subnum=document.getElementById("inputid");
//     subnum.value+="-";
// }

// function seven(){
//     let sevennum=document.getElementById("inputid");
//     sevennum.value+=7;
// }

// function eight(){
//     let eightnum=document.getElementById("inputid");
//     eightnum.value+=8;
// }

// function nine(){
//     let ninenum=document.getElementById("inputid");
//     ninenum.value+=9;
// }

// function mul(){
//     let mulnum=document.getElementById("inputid");
//     mulnum.value+="*";
// }

// function zero(){
//     let zeronum=document.getElementById("inputid");
//     zeronum.value+=0;
// }

// function div(){
//     let divnum=document.getElementById("inputid");
//     divnum.value+="/";
// }

// function equal(){
//     let equalnum=document.getElementById("inputid");
//     value.value = eval(value.value);
// }

// function mod(){
//     let modnum=document.getElementById("inputid");
//     modnum.value+="%";
// }

function display(val){
    let valule=document.getElementById("inputid");
    valule.value+=val;
    return val;
}

function equal(){
    let result=document.getElementById("inputid").value;
    let x=eval(result);
    
    document.getElementById("inputid").value=x;
    return x;
}