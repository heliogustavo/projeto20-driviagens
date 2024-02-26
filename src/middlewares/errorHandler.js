import httpStatus from "http-status"

export default function errorHandler(error, req, res, next){
    console.log(error)
    if(error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong");
}