let axios = require("axios")



    let getWeather = async function (req, res) {

        try {
            let city = req.query.q
            let app = req.query.appid
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app}`
            }
            let result = await axios(options);
            console.log(result)
            let data = result.data
            res.status(200).send({ msg: data, status: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }


    let getSortedCities=async function (req,res){
        try{
            let cities =["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
            let cityObjArray=[]
            for (i=0;i<cities.length;i++){
                let obj={city:cities[i] }
                let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f359da0986ddc9b97630b7ac255840d9`)
                console.log(resp.data.main.temp)
    
                obj.temp=resp.data.main.temp
                cityObjArray.push(obj)
            }
    
            let sorted=cityObjArray.sort( function(a,b){return a.temp - b.temp})
    
            console.log(sorted)
            res.status(200).send({status:true,data:sorted})
        }catch (error){
            console.log(error)
            res.status(500).send({status:false,msg:"server error"})
        }
    }
    
    

module.exports.getWeather=getWeather
module.exports.getSortedCities=getSortedCities