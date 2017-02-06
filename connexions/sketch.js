var connexions;
var stoptimes;


function preload(){
  stoptimes=loadTable("stop_times10.csv","csv","header");
}

function setup() {
  connexions = [];
  createCanvas(600,600);
  var s=0;
  print(stoptimes.getRowCount() + " total rows in stoptimes");
  print(stoptimes.getColumnCount() + " total columns in stoptimes");
  
  for (var r = 1; r < stoptimes.getRowCount(); r++) {
    if (float(stoptimes.getString(r, 0))==float(stoptimes.getString(r-1,0 )) && float(stoptimes.getString(r, 4))>float(stoptimes.getString(r-1, 4))){
      
      connexions[s]=new connection(r);
      var s=s+1;
    }
  }
  
  print(connexions);
  
}

function connection(c){
      this.start_stop_id=float(stoptimes.getString(c-1, 3));
      this.end_stop_id=float(stoptimes.getString(c, 3));
      this.start_time=str(stoptimes.getString(c-1, 2));
      this.end_time=str(stoptimes.getString(c, 2));
}

function draw() {
  
}