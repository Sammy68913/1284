async function display() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=358ca03993d40eb9611b4fb482ac0b65';

    const response = await fetch(url);
    var data = await response.json();
}
display().then(function (result) {
    console.log(result);
    let { main: { temp, temp_max, temp_min = result } } = result;
    console.log("TEMPERATURE :" + temp);
    console.log("TEMPERATURE :" + temp_max);
    console.log("TEMPERATURE :" + temp_min);
    document.getElementById("test").innerHTML = temp;

});