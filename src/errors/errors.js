
 function conflict (resource="item"){
    return{
            type:"conflict",
            message:`This ${resource} has already been added!`
        } 
 }

 function wrongData(){
    return{
        type:"wrongData",
        message: "The fields are wrong!"
    }
 }

 function notFound (resource="item"){
    return{
            type:"notFound",
            message:`${resource} not found!`
        } 
 }

 function equalCities (){
    return{
            type:"conflict",
            message:`The destination can't be equal to the origin city!`
        } 
 }

 function invalidFlightDate (){
    return{
            type:"wrongData",
            message:`The flight date nedds to be greater than today!`
        } 
 }
 function invalidTravelDate (){
    return{
            type:"wrongData",
            message:`bigger-date needs to be greater than smaller-date!`
        } 
 }
 function invalidTravelDateAmount (){
    return{
            type:"badRequest",
            message:`Both bigger-date and smaller-date needs to be passed!`
        } 
 }
 function tooManyResults (){
    return{
            type:"tooManyResults",
            message:`Exeeded 10 travels limit!`
        } 
 } 

export const errors = {conflict, wrongData, notFound, equalCities, invalidFlightDate, invalidTravelDate, invalidTravelDateAmount, tooManyResults}