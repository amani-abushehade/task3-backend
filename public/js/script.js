
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')


let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
        }
        else {
            locationF.innerText = data.location
            forecastF.innerText = data.forecast
            errorF.innerText = ''
        }
    }
    catch(e){
        console.log(e)
    }
}