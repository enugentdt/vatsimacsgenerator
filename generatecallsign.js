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
    'ASA', 'AAY', 'AAL', 'DAL', 'FFT', 'HAL', 'JBU', 'SWA', 'NKS', 'SCX', 'UAL', 'AWI', 'KAP', 'UCA', 'CPZ', 'VTE', 'MNU', 'EDV', 'ENY', 'ASQ', 'GJS', 'GLA', 'QXE', 'ASH', 'PEN', 'PDT', 'JIA', 'RVF', 'RPA', 'SIL', 'SKW', 'LOF', 'SRY', 'DYN', 'WBR', 'RSI', 'BRG', 'BTQ', 'VTS', 'FTA'
];
