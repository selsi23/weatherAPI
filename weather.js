console.log("get weather function invoked");
async function getWeather(){
    console.log("get weather function invoked2");
    var city=document.getElementById("city").value;
    var url="https://api.openweathermap.org/data/2.5/forecast?q=";
    var key="39a5b0bd7013de783791e3a3fd9d27a5";
    url=url.concat(city).concat('&appid=').concat(key).concat('&units=metric');
    console.log(url)
    let result=await fetch(url);
    let ob=await result.json();
    var a=document.getElementById("display");
    a.innerHTML='<p id="country">'+"COUNTRY NAME: "+'</p><br>'+'<p id="max_temp">'+"MAXIMUM TEMPERATURE IS : "+ob.list[0].main.temp_max+'</p><br>'+
    '<p id="min_temp">'+"MINIMUM TEMPERATURE IS : "+ob.list[0].main.temp_min+'</p><br>'+
    '<p id="humidity">'+"HUMIDITY : "+ob.list[0].main.humidity+'</p><br>';
    label=[];
    data=[];
    var time=ob.list[0].dt_txt.split(" ")[1];
    a.innerHTML='<p id="country">'+"COUNTRY NAME: "+ob.city.country+'</p>'+'<p id="max_temp">'+"MAXIMUM TEMPERATURE IS : "+ob.list[0].main.temp_max+'</p>'+
    '<p id="min_temp">'+"MINIMUM TEMPERATURE IS : "+ob.list[0].main.temp_min+'</p>'+
    '<p id="humidity">'+"HUMIDITY : "+ob.list[0].main.humidity+'</p>';
    for(i=0;i<40;i++){
        var date=ob.list[i].dt_txt.split(" ");
        label.push(date[0]);
        data.push(ob.list[i].main.temp);
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: label,
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}