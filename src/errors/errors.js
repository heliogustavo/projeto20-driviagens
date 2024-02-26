
 function conflict (resource="item"){
    return{
            type:"conflict",
            message:`This ${resource} has already been added!`
        } 
 }

 function wrongData(){
    return{
        type:"",
        message: "The fields are wrong!"
    }
 }


export const errors = {conflict, wrongData}