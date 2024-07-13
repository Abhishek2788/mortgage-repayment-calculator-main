function mtRepayment(mortgageAmount,mortgageTerm,interestRate){
    let MT=mortgageTerm * 12;
    let iR=interestRate / 12 / 100;
    let m=Math.pow(1 + iR, MT);
    let f=(mortgageAmount * iR * m) / (m-1);
    return f;
}

function mtInterestOnly(mortgageAmount,interestRate){
    let iR=interestRate / 12 / 100 ;
    let f=mortgageAmount * iR;
    return f;
}


document.getElementById("button").addEventListener("click",function(){
    const MorA=parseFloat(document.getElementById("MA").value);
    const MT=parseInt(document.getElementById("year").value);
    const IR=parseFloat(document.getElementById("interestR").value);
    document.getElementById("rr1").style.display="none";
    document.getElementById("rr2").style.display="block";
    let MP=document.getElementById("result1");
    let TP=document.getElementById("result2");
    
     if(isNaN(MorA) || isNaN(MT) || isNaN(IR)){
        alert("Please enter valid input...")
     }
     else{
        let r=document.getElementById("repayment").checked;
        let io=document.getElementById("interestOnly").checked;
        if(r){
            let a=mtRepayment(MorA,MT,IR);
            MP.innerHTML=`$ ${a.toFixed(8)}`;
            TP.innerHTML=`$ ${(a*MT*12).toFixed(8)}`;
            
        }
        else if(io){
            let b=mtInterestOnly(MorA,IR);
            MP.innerHTML=`$ ${b.toFixed(8)}`;
            TP.innerHTML=`$ ${(b * MT * 12 + MorA).toFixed(8)}`;
            
        }

     }
     document.getElementById("repayment").checked = false;
     document.getElementById("interestOnly").checked = false;
});

document.getElementById("clearAll").addEventListener("click",function(){
    let MorA=document.getElementById("MA");
    let MT=document.getElementById("year");
    let IR=document.getElementById("interestR");
    let MP=document.getElementById("result1");
    let TP=document.getElementById("result2");
    MorA.value="";
    MT.value="";
    IR.value="";
    document.getElementById("repayment").checked = false;
    document.getElementById("interestOnly").checked = false;
    document.getElementById("rr1").style.display="block";
    document.getElementById("rr2").style.display="none";

})