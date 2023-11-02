// //Question1:Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload = function() {
    var data = request.response;
    
    var result = JSON.parse(data);
    // console.log(result);
    var res = result.filter((element)=>{
        if(element.region==="Asia"){
            console.log(element.name.common);
        }
    });

    }
// question2:Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v3.1/all",true);

request1.send();

request1.onload = function() {
    var data = request1.response;
    
    var result1 = JSON.parse();
    // console.log(result);
    var res1 = result1.filter((element)=>{
        if(element.population< 200000){
            console.log(element.name.common);
        }
    });

    }
    // question3:Print the following details name, capital, flag, using forEach function
    var request2 = new XMLHttpRequest();

    request2.open("GET","https://restcountries.com/v3.1/all",true);
    
    request2.send();
    
    request2.onload = function() {
        var data2 = request1.response;
        
        var result2 = JSON.parse(data2);
        var res = result2.forEach((ele)=>console.log(`Name: ${ele.name.common}, Capital: ${ele.capital}, Flag ${ele.flags.png}`));
    }
    //question:4Print the total population of countries using reduce function

    var request3 = new XMLHttpRequest();

    request3.open("GET","https://restcountries.com/v3.1/all",true);
    
    request3.send();
    
    request3.onload = function() {
        var data3 = request3.response;
        
        var result3 = JSON.parse(data3);
        var res3 = result3.reduce((acc,cv)=>{
            return acc+cv.population;
        },0);
        console.log(res3);
        }

        // Question:5 Print the country that uses US dollars as currency.
        var request4 = new XMLHttpRequest();

    request4.open("GET","https://restcountries.com/v3.1/all",true);
    
    request4.send();
    
    request4.onload = function() {
        var data4 = request4.response;
        
        var result4 = JSON.parse(data4);
        var res4 = result4.filter((ele)=>{
            if(ele.currencies==="US dollars"){
            console.log(ele.name.common);
        }
    })
    
}