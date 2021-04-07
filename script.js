
document.getElementById("C").addEventListener("click",clear);

var currText=document.getElementById("curr-text");
var prevText= document.getElementById("prev-text");

function clear(){
    prevText.innerHTML="";
    currText.innerHTML="";
}
//NUMBERS 
document.getElementById("0").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("0").innerHTML;
})
document.getElementById("1").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("1").innerHTML;
})
document.getElementById("2").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("2").innerHTML;
})
document.getElementById("3").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("3").innerHTML;
})
document.getElementById("4").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("4").innerHTML;
})
document.getElementById("5").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("5").innerHTML;
})
document.getElementById("6").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("6").innerHTML;
})
document.getElementById("7").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("7").innerHTML;
})
document.getElementById("8").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("8").innerHTML;
})
document.getElementById("9").addEventListener("click",()=>{
    currText.innerHTML=currText.innerHTML+document.getElementById("9").innerHTML;
})

//OPERATORS

    document.getElementById("/").addEventListener("click",()=>{
        var str = currText.innerHTML.toString();
        if(str[str.length-1]=="/" || str[str.length-1]=="+" || str[str.length-1]=="-" || str[str.length-1]=="*"){
            return;
        }
        currText.innerHTML=currText.innerHTML+document.getElementById("/").innerHTML;
    })
    document.getElementById("*").addEventListener("click",()=>{
        var str = currText.innerHTML.toString();
        if(str[str.length-1]=="/" || str[str.length-1]=="+" || str[str.length-1]=="-" || str[str.length-1]=="*"){
            return;
        }
        currText.innerHTML=currText.innerHTML+document.getElementById("*").innerHTML;
    })
    document.getElementById("+").addEventListener("click",()=>{
        var str = currText.innerHTML.toString();
        if(str[str.length-1]=="/" || str[str.length-1]=="+" || str[str.length-1]=="-" || str[str.length-1]=="*"){
            return;
        }
        currText.innerHTML=currText.innerHTML+document.getElementById("+").innerHTML;
    })
    document.getElementById("-").addEventListener("click",()=>{
        var str = currText.innerHTML.toString();
        if(str[str.length-1]=="/" || str[str.length-1]=="+" || str[str.length-1]=="-" || str[str.length-1]=="*"){
            return;
        }
        currText.innerHTML=currText.innerHTML+document.getElementById("-").innerHTML;
    })





//EQUAL

document.getElementById("=").addEventListener("click",()=>{
    var str = currText.innerHTML.toString();
        if(str[str.length-1]=="/" || str[str.length-1]=="+" || str[str.length-1]=="-" || str[str.length-1]=="*"){
           str=str.substring(0,str.length-1)
        }
    var res=eval(str);
    prevText.innerHTML=currText.innerHTML;
    currText.innerHTML=res;
})