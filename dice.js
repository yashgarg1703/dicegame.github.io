
// CODE FOR LEFT DICE

function diceroll()
{
  var a=Math.random();
  a=a*6;
  a=Math.floor(a)+1;
  if(a==1)
  document.querySelector(".left").setattribute("src","dice1.png");
  else if(a==2)
  document.querySelector(".left").setAttribute("src","dice2.png");
  else if(a==3)
  document.querySelector(".left").setAttribute("src","dice3.png");
  else if(a==4)
  document.querySelector(".left").setAttribute("src","dice4.png");
  else if(a==5)
  document.querySelector(".left").setAttribute("src","dice5.png");
  else
  document.querySelector(".left").setAttribute("src","dice6.png");
  // CODE FOR RIGHT DICE
  var b=Math.random();
  b=b*6;
  b=Math.floor(b)+1;
  if(b==1)
  document.querySelector(".right").setattribute("src","dice1.png");
  else if(b==2)
  document.querySelector(".right").setAttribute("src","dice2.png");
  else if(b==3)
  document.querySelector(".right").setAttribute("src","dice3.png");
  else if(b==4)
  document.querySelector(".right").setAttribute("src","dice4.png");
  else if(b==5)
  document.querySelector(".right").setAttribute("src","dice5.png");
  else
  document.querySelector(".right").setAttribute("src","dice6.png");

  if(a<b)
  {
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉";
    document.querySelector(".first").innerHTML="👎 Player 1";
    document.querySelector(".second").innerHTML="Player 2 ✌";
  }
  else if(a>b)
  {
  document.querySelector("h1").innerHTML="🎉 Player 1 Wins";
  document.querySelector(".first").innerHTML="✌ Player 1";
  document.querySelector(".second").innerHTML="Player 2 👎";
  }
  else{
  document.querySelector("h1").innerHTML="DRAW! 🤔";
  document.querySelector(".first").innerHTML="😯 Player 1";
  document.querySelector(".second").innerHTML="Player 2 😯";
}
}

diceroll();
// document.getElementbyId("diceimg").addEventListener('click',diceroll);
