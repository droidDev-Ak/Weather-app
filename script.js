const apikey="8990dea1bc6ee602c65f5d5040a22724";
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector(".search");
const search_btn=document.querySelector(".search_btn");

const degree=document.querySelector(".degree");



async function checkWeather(city){
    const resp=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await resp.json();

    console.log(data);
    console.log(data.name);

    if(data.message=="city not found" || data.message=="Nothing to geocode"){
        alert("Enter valid city")
    }
    else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+"˚C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=`${data.wind.speed} km/h`;

    
    
    
    const icon=document.querySelector(".icon");
    
    icon.src=`Img/${data.weather[0].main}.png`
    search.value=""
}
let isC=true;

degree.addEventListener("click",function(){
    if(isC==true){

        let c=data.main.temp;
        let f=c*(1.8)+32;
        document.querySelector(".degree").innerHTML=Math.round(f)+"˚F";
        isC=false;
    }
    else{
        let c=data.main.temp;
        document.querySelector(".degree").innerHTML=Math.round(c)+"˚C";
        isC=true;

    }

})
    

}

search_btn.addEventListener("click",function(e){
    checkWeather(search.value);
})

search.addEventListener("keyup",function(e){

if(e.key=="Enter"){
    checkWeather(search.value)
}


})
