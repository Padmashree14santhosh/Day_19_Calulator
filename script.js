

function clearfun(){
    document.getElementById("inputid").value=null;
 }


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