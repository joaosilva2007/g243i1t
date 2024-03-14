function abrir_aba(num){
  for(let i= 1; i <= 5; i++){
    let id_btn = "btn" +i;
    let id_aba = "aba" +i;
    document.getElementById(id_btn).disable = false;
    document.getElementById(id_aba).style.display = "none";
  } 
   
    if(num == "1"){
    document.getElementById("btn1").disable = true;
    document.getElementById("aba1").style.display = "block";
    }
    if(num == "2"){
    document.getElementById("btn2").disable = true;
    document.getElementById("aba2").style.display = "block";
      }
    if(num == "3"){
    document.getElementById("btn3").disable = true;
    document.getElementById("aba3").style.display = "block";
        }
    if(num == "4"){
    document.getElementById("btn4").disable = true;
    document.getElementById("aba4").style.display = "block";
          }
    if(num == "5"){
    document.getElementById("btn5").disable = true;
    document.getElementById("aba5").style.display = "block";
    }
}