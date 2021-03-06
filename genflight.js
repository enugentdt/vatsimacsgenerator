function genFlight(lat,lng,altitude,hdg, arprt)
{
    var airport;
    if(arprt==""){
        airport = "KJFK";
    }else{
        airport = arprt;
    }
    var callsign = newAircraft(); //Yes, we even make their callsign for you.  See generatecallsign.js for a list of airlines.
    var squawk = makeSquawk(); //A very inefficient way to do this.  But I'll do it this way anyway.
    var heading;
    var alt;
    // Spacer
    if(!hdg){
        heading = 360; //Standard hdg.
    }else{
        heading = hdg;
    }
    var arraprt;
    var depaprt;
    if(!altitude){
        alt = 27; //Field elevation.  This is for JFK currently.
        depaprt = airport;
        do{
            arraprt=genAirport();
        } while(depaprt==arraprt);
        console.log("Ground Mode: "+depaprt+","+arraprt);
    }else{
        alt = altitude; //Pulls from the altitude input.
        arraprt = airport;
        do {
            depaprt=genAirport();
        } while(arraprt==depaprt)
        console.log("Air Mode: "+depaprt+","+arraprt);
    }
    var gs = 1; //Ground Speed
    var cdr = 1800; //Climb/Descent Rate
    var type = "I"; // IFR (I) or VFR (V)
    // Newline
    var actype = genICAO(); 
    var cruisespeed = 400;
    var deptime = 1755; //Inaccurate
    var randNum = Math.ceil(Math.random() * 10); 
    var cruisealt = 30000 + randNum * 1000; //Unless specified in the PRD, randomly generated.
    var enroutehrs = 4; //Inaccurate
    var enroutemins = 50; //Inaccurate
    // Newline
    var routeData = getRoute(depaprt, arraprt); //Get PRD info
    var route = "DIRECT"; //If there's no entry in the PRD, go direct.
    
    if (routeData != null)
    {
        route = routeData[1];
        if (routeData[3] != "")
        {
            cruisealt = routeData[3];
        }
    }
    
    var voicetype = "/v/"; //Because trainers are /v/
    
    // AAL123:B190/A:T:V:KBTV:KMHT:15500:BTV MPV LEB MHT:/V/VFR/CHARTS:1200:S:44.46370:-73.15221:335:0:360
    // Callsign:Type:Engine:Rules:Dep Field:Arr Field:Crz Alt:Route:Remarks:Sqk Code:Sqk Mode:Lat:Lon:Alt:Speed:Heading
    
    var out = callsign + ":" + actype + "/L:J:" + type + ":" + depaprt + ":" + arraprt + ":" + 
        cruisealt + ":" + route + ":" + voicetype + ":" + squawk + ":S:" + lat + ":" + lng + ":" +
        alt + ":" + gs + ":" + heading; //Please don't mess with this.  This is what makes your file work.
    return out;
}

function makeSquawk(){ //Inefficient JS by Brin :-)
    final = "";
    for(var i=0; i<4; i++){
        final+= Math.ceil(Math.random() * 9); 
    }
    return final;
}
