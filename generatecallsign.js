function newAircraft()
{
    var anum = Math.floor(Math.random() * (airlines.length - 1));
    while (isNaN(anum)) {
        anum = Math.floor(Math.random() * (airlines.length - 1));
    }
    console.log("anum: " + anum);
    
    var airline = airlines[anum];
    var nnum = Math.floor(Math.random() * 10000);
    while (isNaN(nnum)) {
        nnum = Math.floor(Math.random() * 10000);
    }
    console.log("nnum: " + nnum)
    
    return airline + nnum;
}


var airlines = [
"AAL", "DAL", "JBU", "FTA", "NKS", "UAL", "FFT", "AAL", "AAY", "HAL", "SWA", "SCX", "VRD", "EDV", "RPA"
];
