var table;

function preload() {
	table = loadTable("stops10.csv", "csv", "header");
}

function setup() { 
  createCanvas(600,900);
  
	var n = 45;
	textSize(20);
	text("Distance entre les arrêts", 15, 25);
	
	textSize(15);
	text("Départ", 15, 45);
	text("Latitude / Longitude", 75, 45);
	text("Arrivée", 250, 45);
	text("Latitude / Longitude", 310, 45);
	text("Distance (m)", 475, 45);

	
	for (var a1 = 0; a1 < table.getRowCount(); a1++) {
		for (var a2 = a1+1; a2 < table.getRowCount(); a2++) {
			
			fill(115);
			textSize(14);
			n = n + 18;

			var lat1 = float(table.getString(a1, 4));
			var lon1 = float(table.getString(a1, 5));
			var lat2 = float(table.getString(a2, 4));
			var lon2 = float(table.getString(a2, 5));

			text(table.getString(a1, 0), 15, n);
			text(lat1 + " / " + lon1, 75, n);
			
			text(table.getString(a2, 0), 250, n);
			text(lat2 + " / " + lon2, 310, n);
			
			var dist = distance(lat1, lon1, lat2, lon2);
			text(dist*1000, 475, n);					
			
		}
		
		L.marker([lat1, lon1], 50, {
			color: '#00ffaa',
			fillColor: '#bd3',
			fillOpacity: 5
		}).addTo(mymap).bindPopup("Arrêt 100" + a1);
		
	}
} 

function distance(la1, lo1, la2, lo2) {
	
	var rlat1 = la1 * PI / 180;
	var rlat2 = la2 * PI / 180;
	//var Δφ = (la2-la1) * PI / 180;
	var rtlon = (lo1-lo2) * PI / 180;
	
	var a = sin(rlat1) * sin(rlat2) + cos(rlat1) * cos(rlat2) * cos(rtlon);
	var b = acos(a) * 180/PI;
	var c = b * 60 * 1.1515;
	var d = c * 1.609344;
	
	return d;
}
