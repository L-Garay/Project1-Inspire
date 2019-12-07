export default class Weather {
  constructor(data) {
    this.city = data.name;
    this.kelvin = data.main.temp;
    this.description = data.weather.description;
    this.icon = data.weather.icon;
    this.humidity = data.main.humidity;
    this.wind = data.wind.speed;
    this.farh = (this.kelvin * 9) / 5 - 459.67;
    this.farhRounded = Math.floor(this.farh);
    this.cels = this.kelvin - 273.15;
  }

  get weatherTemplate() {
    return `
    
    <div class="background">
      <div class="Circle1"></div>
      <div class="Circle2"></div>
      <div class="Circle3"></div>
      <div class="content">
        <h1 class="Condition"><i class="material-icons sun">wb_sunny</i> ${this.description}</h1>
        <h1 class="Temp">${this.farhRounded}<span id="F">&#8457;</span></h1>
        <h1 class="Time">${this.humidity} and ${this.wind}</h1>
        <h1 class="Location"><i class="material-icons locationIcon">place</i> ${this.city}</h1>
      </div>
   `;
  }
}
