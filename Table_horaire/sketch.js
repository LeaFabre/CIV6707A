var table_horaire=[];
var table;

function preload(){
    table = loadTable("stop_times20.csv", "csv", "header");
}


function setup() {
  for (var i =0; i<table.getRowCount()-1;i++){
    if (table.getString(i+1,0)==table.getString(i,0)){ //condition : même trip_id
    table_horaire[i] = new Connexion(i);
    } 
  }
  table_horaire.sort(comparaison); //rangement dans l'ordre croissant des heures de départ 
  print(table_horaire); //affichage dans la console 
}


function Connexion(i){
  //une connexion = {station de départ, station d'arrivée, heure de départ, heure d'arrivée}
  this.departureStation=float(table.getString(i, 3));
  this.arrivalStation=float(table.getString(i+1, 3));
  this.departureTime=conversionSecondes(table.getString(i, 1)); //heure de départ en secondes
  this.arrivalTime=conversionSecondes(table.getString(i+1, 1)); //heure d'arrivée en secondes 
}

function conversionSecondes(a){ //convertit hh:mm:ss en secondes 
  var heures=float(a.substring(0,2))*3600; //est-ce que les substring ne devraient pas être (0, 1),
  var minutes=float(a.substring(3,5))*60; // (3, 4) et
  var secondes=float(a.substring(6,8)); // (6, 7) ?
  var b=heures+minutes+secondes;
  return b;
}

function comparaison(connexion1,connexion2){ //compare les heures de départ de deux connexions 
  if (connexion1.departureTime < connexion2.departureTime){
    return -1;
  } else if (connexion1.departureTime > connexion2.departureTime) {
    return 1;
  } else {
    return 0;
  }
}
