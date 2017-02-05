var connections = [];
var n = 0;
var table;

function preload() {
  table = loadTable("stop_times.csv", "csv", "header");
}



function setup() {
  createCanvas(600,900);
  background(200);
  tableconnection();
  textSize(20);
  fill(100,100,200);
  text(table.getRowCount() + " total rows in table",10,15);
  text(table.getColumnCount() + " total columns in table",10,40);
  // for (var r = 0 ; r < connections.length ; r++){
  textSize(20);
  fill(200,250,100);
  text(connections.length,200,70);
  
 // }

}

function draw() {
  
}

function tableconnection (){
  for(var i = 1; i< table.getRowCount(); i++){
    
    var trip1 = float(table.getString(i, 0));
    var trip2 = float(table.getString(i-1, 0))
  if (trip1 == trip2){
  var time = float(table.getString(i, 1))-float(table.getString((i-1), 1));
    connections[n]=[table.getString((i-1), 1),table.getString((i-1), 3),table.getString(i, 3),time,false,{},table.getString(i, 0),'route_id'];
      n=n+1;
    }
  }
}