# VATSIMAircraftGenerator

Written by Eamonn Nugent and Brin Brody under the "Beer-ware" license.

## Usage
To use, simply visit [this link](https://demilletech.github.io/vatsimacsgenerator/).
At the moment, the code is written for flights from JFK. To make it work with your own airport, see `Add My Airport`.

### Creating a flight
Zoom into the airport of your choice, and click anywhere on the map.  This code defaults to KJFK.  To change the default location, see the `Change Default Airport` section. On the left-hand side, a flightplan should show up in a format that can be used by TWRTrainer. Copy the text when completed, and save as a .acs file anywhere you'd like. NOTE: The current source encodes for departures from KJFK. If you want to change this, see the `Add My Airport` section,

## API Key
This requires a Google Maps API key. Please view [this link](https://stackoverflow.com/questions/22294128/how-can-i-get-google-map-api-v3-key) to see how to obtain one. It needs to be inserted into `index.html`, on the line that contains the Maps API call, as the `key`
GET variable.

## Change Default Airport
To change the default airport on which the map starts looking at, edit the `index.html` file.  In the `mapOptions` object inside the `myMap()` function, edit the `center` property to read `new google.maps.LatLng(lat,long)`, replacing the lat and long inputs with the latitude and longitude of the airport, to two decimal places.

## Add My Airport
Fill your airport code into the airport box on the page.  If you have inputted an altitude, it assumes the airport is the arrival field. Otherwise, it assumes the airport is the departure field.

## Routing
Currently, all aircraft are written to follow FAA PRD routing.
If no routing is found through the PRD API, then the aircraft will proceed DIRECT.

## Altitudes
Altitudes, if not specified in the PRD, are randomly generated at or above FL300.

## Note
In order for the webpage to not appear with a BLOCKED_BY_CLIENT error, you MUST turn any adblocking software off prior to use.  This webpage is NOT optimised for mobile usage at this time.
