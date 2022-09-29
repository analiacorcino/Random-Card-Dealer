import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palo = ["♦", "♥", "♠", "♣"];
  const jugar = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "Q", "J", "K"];

  let randompalo = Math.floor(Math.random(palo) * palo.length);
  let randomjugar = Math.floor(Math.random(jugar) * jugar.length);

  let returnpalo1 = (document.getElementById("palo-top").innerHTML =
    palo[randompalo]);

  let returnjugar = (document.getElementById("jugar-medio").innerHTML =
    jugar[randomjugar]);

  let returnpalo2 = (document.getElementById("palo-bottom").innerHTML =
    palo[randompalo]);

  //INTENTO FAILLIDO DE COLOR

  //let color =
  //palo[randompalo] == "♦" || palo[randompalo] == "♥" ? "red" : "black";

  //document.querySelector(".palo-bottom").style.color = color;
  //document.querySelector(".palo-top").style.color = color;

  return {
    returnpalo1,
    returnjugar,
    returnpalo2
    //color,
  };
};
