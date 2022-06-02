const trim = function () {
    const a= "Ravi Kiran";
    result= a.trim();
    console.log(result)
}

module.exports.trim=trim

const lowerCase= function () {
    const b= "Ravi Kiran";
    result= b.toLowerCase();
    console.log(result);
}

module.exports.lowerCase=lowerCase

const upperCase= function () {
    const c= "Ravi Kiran";
    result= c.toUpperCase();
    console.log(result);
}

module.exports.upperCase=upperCase