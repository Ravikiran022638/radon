const array= ["jan", "feb", "march" , "april", "may", "june", "july", "august","september", "october", "november", "december"]
 const size= 4;
function chunking() {
    result= _.chunk(array, size);
    console.log(result);
}
     
 module.exports.array=array