const apiKey = '28ef4ec5d36442b59c4152548261401'
const c = document.querySelector('.city').value
const button = document.querySelector('.btn-js')

button.addEventListener('click',async (c)=>{

    await api(c);
})



async function api(city){
console.log("USING KEY:", apiKey);
 const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
 const data = await response.json()
 console.log(data)
const a =data.current.last_updated
 c.textContent = a

 
}

