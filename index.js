// 3eae6a09dda0704a85a8b446e174e820
//let text = document.getElementById("text");
let button = document.getElementById("btn");

let getWeather = async (city) => {
    
    let WeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3eae6a09dda0704a85a8b446e174e820&units=metric';
    
    let WeatherObj = await fetch(WeatherAPI);
    
    let response = WeatherObj.json();
    return response;
    
}


async function callWeather() {
    let city = document.getElementById("txt").value;
    let display = document.getElementById("display");
    
    console.log(city)

    try {

        let response = await getWeather(city)
        console.log(response);

        // let p1 = document.createElement('p');
        // let p2 = document.createElement('p');
        // let p3 = document.createElement('p');
        // let p4 = document.createElement('p');
        // let p5 = document.createElement('p');
        
        let p1=document.getElementById("p1");
        let p2=document.getElementById("p2");
        let p3=document.getElementById("p3");
        let p4=document.getElementById("p4");
        let p5=document.getElementById("p5");


        p1.innerText = "Country : " + response['sys']['country'];
        p2.innerText = "City : " + response['name']
        p3.innerText = "Temparature : " + response['main']['temp']
        p4.innerText = "Description : " + response['weather'][0]['description']
        p5.innerText = "Wind Speed : " + response['wind']['speed']


        // display.appendChild(p1);
        // display.appendChild(p2);
        // display.appendChild(p3);
        // display.appendChild(p4);
        // display.appendChild(p5);

       
        console.log("Country : ", response['sys']['country']);
        console.log("City : ", response['name']);
        console.log("Temparature : ", response['main']['temp']);
        console.log("Description : ", response['weather'][0]['description']);
        console.log("Wind Speed : ", response['wind']['speed']);
        console.log("This Weather Information has been reterived Successfully...!");




    } catch (err) {

        console.log(err)
    }



}
button.addEventListener('click', callWeather);



