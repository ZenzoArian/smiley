let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

setTimeout(
  function(){
     wait();
   }, 100);
function wait() {

context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.fillStyle="yellow";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait2();
   }, 100);
}


function wait2() {

context.beginPath();
context.arc(130,130,40,0,1*Math.PI);
context.fillStyle="white";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait3();
   }, 100);
}

function wait3() {

//oog
context.beginPath();
context.arc(270,130,40,0,1*Math.PI);
context.fillStyle="white";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait4();
   }, 100);
}

function wait4() {

context.beginPath();
context.arc(270,150,10,0,2*Math.PI);
context.fillStyle="black";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait5();
   }, 100);
}

function wait5() {

context.beginPath();
context.arc(130,150,10,0,2*Math.PI);
context.fillStyle="black";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait6();
   }, 100);
}
//oog
function wait6() {

context.beginPath();
context.arc(200,230,90,0,1*Math.PI);
context.fillStyle="black";
context.fill();
context.closePath();
context.stroke();

setTimeout(
  function(){
     wait7();
   }, 100);
}


function wait7() {

context.moveTo(80,370);
context.lineTo(320,370);
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait8();
   }, 100);
}

function wait8() {

context.beginPath();
context.arc(200,380,30,0,2*Math.PI);
context.fillStyle="red";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait9();
   }, 100);
}

function wait9() {

context.beginPath();
context.arc(200,190,15,0,2*Math.PI);
context.fillStyle="blue";
context.fill();
context.closePath();
context.stroke();
setTimeout(
  function(){
     wait10();
   }, 100);
}

function wait10() {

context.moveTo(120,60);
context.lineTo(140,80);
context.closePath();
context.stroke();

context.moveTo(140,60);
context.lineTo(160,80);
context.closePath();
context.stroke();

context.moveTo(160,60);
context.lineTo(180,80);
context.closePath();
context.stroke();

context.moveTo(180,60);
context.lineTo(200,80);
context.closePath();
context.stroke();

context.moveTo(200,60);
context.lineTo(220,80);
context.closePath();
context.stroke();

context.moveTo(220,60);
context.lineTo(240,80);
context.closePath();
context.stroke();

context.moveTo(240,60);
context.lineTo(260,80);
context.closePath();
context.stroke();



}
