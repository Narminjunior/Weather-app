let weather = {
    "apiKey": "49524d39641c5241eef3dded3963e890",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
             city +
            "&units=metric&appid=" +
         this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        //const { lon } = coord;
        //const { lat } = coord;
        //i wasn't able to put "or"
        const { icon, description } = data.weather[0];
        const { temp,temp_max, temp_min, humidity,pressure } = data.main;
        const { speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
       // document.querySelector(".city"). = "Weather in " + lon;
        //document.querySelector(".city"). = "Weather in " + lat;
        document.querySelector(".icon").scr = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".temp_min").innerText = "Min: " + temp_min + "°C";
        document.querySelector(".temp_max").innerText ="Max: " +  temp_max + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".pressure").innerText = "Pressure:  " + pressure +"hPa";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed  +" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name  + "')"

    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }


};

document
.querySelector(".search button")
.addEventListener("click", function() {
weather.search(); 
}
);

document.querySelector(".search-bar").addEventListener("keyup", function(event){
if(event.key == "Enter"){
    weather.search()
}
});
weather.fetchWeather("Baku");