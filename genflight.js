function genFlight(lat,lng,altitude,hdg)
{
    var callsign = newAircraft(); //Yes, we even make their callsign for you.  See generatecallsign.js for a list of airlines.
    var randSq = Math.ceil(Math.random() * 10); 
    var squawk = 7777+randSq*1000; //Every aircraft has a randomised squawk.
    // Spacer
    if(!heading){
        var heading = 360; //Standard hdg.  We start North.
    }else{
        var heading = hdg;
    }
    if(!altitude){
        var alt = 27; //Field elevation.
    }else{
        var alt = altitude; //Pulls from the altitude input.
    }
    var gs = 1; //Ground Speed
    var cdr = 1800; //Climb/Descent Rate
    var type = "I"; // IFR (I) or VFR (V)
    // Newline
    var actype = genICAO(); 
    var cruisespeed = 400;
    var depaprt = "KJFK"; //Change to change route start points.
    var deptime = 1755;
    var randNum = Math.ceil(Math.random() * 10); 
    var cruisealt = 30000 + randNum * 1000; //Unless specified in the PRD, randomly generated.
    var arraprt = genAirport(); //Generated randomly
    var enroutehrs = 4;
    var enroutemins = 50;
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
