let mymap;
let canvas;
const mappa = new Mappa("Leaflet");
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=Fukuoka&APPID=001b0f58045147663b1ea518d34d88b4&units=metric";

const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

let x = 0;
let y = 0;

var waverweather;
var lineX = 0;

//色丸
let date = 30; //almost all 107000

let rowCount;
let columnCount;
let currentRow = 0;

let data;
let a;
let b;
// /色丸ここまで


// // Bubble class
// class Bubble {
//   constructor(pressure) {
//     this.pressure = pressure / 10;
//     //this.over = false;
//   }
//   // Display the Bubble
//   display() {
//     ellipse(200, 200, this.pressure, this.pressure);
//    ellipse(300, 300, lineX, lineX);
//   }
// }
// let table; // Global object to hold results from the loadTable call
// let bubbles = []; // Global array to hold all bubble objects



// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  table = loadTable("assets/data_seis_dammy.csv", "header");
  waverweather = loadJSON("waverweather.json");
  data = loadTable("assets/P03_220115H18_5Hz_dammy.csv", "csv");

}

// Convert saved Bubble data into Bubble Objects
// function loadData() {
//   const bubbleData = table.getRows();
//   // The size of the array of Bubble objects is determined by the total number of rows in the CSV
//   const length = table.getRowCount();

//   for (let i = 0; i < length; i++) {
//     // Get position, diameter, name,
//     const pressure = bubbleData[i].getNum("pressure");

//     // Put object in array
//     bubbles.push(new Bubble(pressure));
//   }

// }



function setup() {
   canvas = createCanvas(windowWidth, 800);
   mymap = mappa.tileMap(options);
   mymap.overlay(canvas);

   //for bubble 
  //  loadData();

   //getData();
   //setInterval(getData, 1000);

  fill(65, 230, 255, 100);  

///色丸
//createCanvas(600, 400);
const rowCount = data.getRowCount();
const columnCount = data.getColumnCount();
///色丸ここまで

}


function draw() {
  background(51);
  clear();

  // // これは動く。
  // stroke(25);
  // line(100, 0, 100, height );

  //  これは動く。
  //ellipse(10,10,10,10);
  text(waverweather.coord.lat, 10, 200);
  text(waverweather.coord.lon, 10, 250);
  // ellipse(500, 500, waverweather.coord.lon, waverweather.coord.lon);

  const nigeria = mymap.latLngToPixel(11.396396, 5.076543); 
  ellipse(nigeria.x, nigeria.y, 20, 20);

  const nyc = mymap.latLngToPixel(40.782, -73.967); 
  ellipse(nyc.x, nyc.y, 20, 20);

  // Get the pixel position for fukuoka. 既存jsonファイルを読んでいる
  const pos = mymap.latLngToPixel(33.6064, 130.4181);
  const pos2 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181);
  const pos3 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181);
  const pos4 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181);
  const pos5 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181);

  const pos6 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*1);
  const pos7 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*1);
  const pos8 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*1);
  const pos9 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*1);
  const pos10 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*1);

  const pos11 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*2);
  const pos12 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*2);
  const pos13 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*2);
  const pos14 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*2);
  const pos15 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*2);

  const pos16 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*3);
  const pos17 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*3);
  const pos18 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*3);
  const pos19 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*3);
  const pos20 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*3);

  const pos21 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*4);
  const pos22 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*4);
  const pos23 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*4);
  const pos24 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*4);
  const pos25 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*4);

  // Draw an ellipse using pos
  ellipse(pos.x, pos.y, waverweather.main.pressure/100, waverweather.main.pressure/100);
  
  // // これは動く。
  // line(lineX, 0, lineX, height );
  // lineX = lineX + 5;
  // if (lineX > width) { 
  // lineX = 0;
  // }

  // // Display all bubbles
  // for (let i = 0; i < bubbles.length; i++) {
  //    bubbles[i].display();
  // }

//色丸
  //background(255);
  noStroke();
  frameRate(1); 
  animateEllipsePlot();
//色丸ここまで

}

function animateEllipsePlot() {   
  valuevalue = data.get(0,currentRow);
  print( data.get(0,currentRow) );  

  if( data.get(0,currentRow+1) - data.get(0,currentRow+2) < -0.07){   //make 2 colour depend on the gap of value1-value2
  fill(3,255,240,150);}  //m// before 3,255,240,8
  else if( data.get(0,currentRow+1) - data.get(0,currentRow+2) > 0.07){  
  fill(3,255,240,100);}  //m// before 3,255,240,8
  else if( -0.02< data.get(0,currentRow+1) - data.get(0,currentRow+2) < 0.02){ 
  fill(40,60,140,80);} 
  else{
  fill(10,70,255,80);}  //m// before 10,70,255,8   //stroke(3,71,244,6)
  // x<-0.02< this area is not that much = blue <0.07<x    

let a = map(valuevalue, 0, date, 0, 200);  //m//define start data to finish data to visualize *0 to 2546 is default
let b = map(valuevalue, 0,  160,  200,  0);  //m// map data from start to finish within height



// Get the pixel position for fukuoka. 既存jsonファイルを読んでいる
const pos = mymap.latLngToPixel(33.6064, 130.4181);
const pos2 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181);
const pos3 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181);
const pos4 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181);
const pos5 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181);

const pos6 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*1);
const pos7 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*1);
const pos8 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*1);
const pos9 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*1);
const pos10 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*1);

const pos11 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*2);
const pos12 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*2);
const pos13 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*2);
const pos14 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*2);
const pos15 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*2);

const pos16 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*3);
const pos17 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*3);
const pos18 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*3);
const pos19 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*3);
const pos20 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*3);

const pos21 = mymap.latLngToPixel(33.6064-0.05*0, 130.4181-0.05*4);
const pos22 = mymap.latLngToPixel(33.6064-0.05*1, 130.4181-0.05*4);
const pos23 = mymap.latLngToPixel(33.6064-0.05*2, 130.4181-0.05*4);
const pos24 = mymap.latLngToPixel(33.6064-0.05*3, 130.4181-0.05*4);
const pos25 = mymap.latLngToPixel(33.6064-0.05*4, 130.4181-0.05*4);

// Draw an ellipse using pos      
ellipse(pos.x, pos.y, a*10/40, a*10/40);
ellipse(pos2.x, pos2.y, a*10/40, a*10/40);
ellipse(pos3.x, pos3.y, a*10/40, a*10/40);
ellipse(pos4.x, pos4.y, a*10/40, a*10/40);
ellipse(pos5.x, pos5.y, a*10/40, a*10/40);
ellipse(pos6.x, pos6.y, a*10/40, a*10/40);
ellipse(pos7.x, pos7.y, a*10/40, a*10/40);
ellipse(pos8.x, pos8.y, a*10/40, a*10/40);
ellipse(pos9.x, pos9.y, a*10/40, a*10/40);
ellipse(pos10.x, pos10.y, a*10/40, a*10/40);
ellipse(pos11.x, pos.y, a*10/40, a*10/40);
ellipse(pos12.x, pos2.y, a*10/40, a*10/40);
ellipse(pos13.x, pos3.y, a*10/40, a*10/40);
ellipse(pos14.x, pos4.y, a*10/40, a*10/40);
ellipse(pos15.x, pos5.y, a*10/40, a*10/40);
ellipse(pos16.x, pos6.y, a*10/40, a*10/40);
ellipse(pos17.x, pos7.y, a*10/40, a*10/40);
ellipse(pos18.x, pos8.y, a*10/40, a*10/40);
ellipse(pos19.x, pos9.y, a*10/40, a*10/40);
ellipse(pos20.x, pos10.y, a*10/40, a*10/40);
ellipse(pos21.x, pos.y, a*10/40, a*10/40);
ellipse(pos22.x, pos2.y, a*10/40, a*10/40);
ellipse(pos23.x, pos3.y, a*10/40, a*10/40);
ellipse(pos24.x, pos4.y, a*10/40, a*10/40);
ellipse(pos25.x, pos5.y, a*10/40, a*10/40);


fill(0,0,255,50);
text(valuevalue, width/2, height/2+5);
  
  currentRow++;
  if(  currentRow > date-1){
      currentRow = 0;
  }        
}

    
  
  
