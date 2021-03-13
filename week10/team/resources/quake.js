import { getJSON } from "./utilities.js";
// Quake Model
export default class Quake {
  constructor() {
    //https://earthquake.usgs.gov/earthquakes/map/?extent=-79.49665,1063.82813&extent=70.14036,1491.32813&listOnlyShown=true
    this.baseUrl =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-02-02";
      
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }

  async getEarthQuakesByRadius(position, radius) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
   const query =this.baseUrl + `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;

     // const query =this.baseUrl;
    this._quakes = await getJSON(query);
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}
