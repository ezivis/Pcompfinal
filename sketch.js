let serial;  
let portName = 'COM7';
let inData; 


function setup() {
  createCanvas(400, 400);
  serial = new p5.SerialPort();
  serial.on('list', printList);
  serial.on('connected', serverConnected); 
  serial.on('open', portOpen);
  serial.on('data', serialEvent); 
  serial.on('error', serialError);
  serial.on('close', portClose); 
  serial.list();
  serial.open(portName); 
}

function draw() {
  background(220);
  console.log(inData);
if(inData==10){
  text('黑色咚咚咚',150,200)
}else if(inData==100){
  text('开灯了',150,200)
}else if(inData==200){
  text('开灯密码没出来loop',150,200)
}else if(inData==54){
  text('风吹出密码盒子',150,200)
}else if(inData==64){
  text('绳子拉出密码盒子',150,200)
}else if(inData==74){
  text('锤子锤出',150,200)
}else if(inData==144){
  text('密码盒出现后loop',150,200)
}else if(inData==154){
  text('大风吹吹报纸',150,200)
}else if(inData==164){
  text('绳子拉了一下嘎吱嘎吱无事发生',150,200)
}else if(inData==174){
  text('锤子拉了一下蹦无事发生',150,200)
}else if(inData==244){
  text('风吹后的loop',150,200)
}else if(inData==254){
  text('风吹起来了但无事发生',150,200)
}else if(inData==8){
  text('拉出了个密码箱子！！！',150,200)
}else if(inData==18){
  text('锤了一下无事发生',150,200)
}else if(inData==88){
  text('有密码箱子的loop',150,200)
}else if(inData==98){
  text('风吹起来了但无事发生',150,200)
}else if(inData==108){
  text('拉了一下无事发生',150,200)
}else if(inData==118){
  text('箱子锤开了！！',150,200)
}else if(inData==188){
  text('绝望loop',150,200)
}else if(inData==198){
  text('懒得理风',150,200)
}else if(inData==208){
  text('懒得理拉',150,200)
}else if(inData==218){
  text('懒得理锤',150,200)
}else if(inData==800){
  text('video 800',150,200)
}
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
function serialEvent() {
  inData = Number(serial.read());
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}
