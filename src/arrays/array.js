const { result } = require("underscore")

const array = ["jan", "feb", "mar", "apr", "may" ,"june", "jul" , "aug", "sep", "oct", "nov", "dec"]
const size= 4

function chunktSlice() {
   let result= _.chunk(array,size)
    console.log(result)
}


module.exports.array=array