var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    //res[1].subregion = "South India";

    //Get all the countries from Asia continent/region using filter method

    var asia_cont = res.filter((res)=>res.region=="Asia");
    console.log(asia_cont);

    //Get all the countries with the population of less than 2 lakhs using filter method

    var popu_count = res.filter((res)=>res.population<200000)
    console.log(popu_count);

    //Print the following details name, capital, flag, using forEach method

    function myfunc(ele){

        console.log(ele.name.common);
        console.log(ele.capital);
        console.log(ele.flag);
    }

    res.forEach(myfunc);

    //Print the total population of countries using reduce method

    var total_pop = res.map((ele)=> ele.population)
    
    var res1 = total_pop.reduce((a,cv)=> a+cv)
    console.log(res1);

    //Print the countries that uses US dollars as currency.

    var usdCountries = [];

        
        res.forEach(function (country) {
            
            if (country.currencies) {
                
                if ("USD" in country.currencies) {
                    
                    usdCountries.push(country.name.common); 
                }
            }
        });

        console.log("Countries that use US Dollars as their currency:");
        console.log(usdCountries);


}