async function api(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b8602f0622b140c08fb140828262201&q=${city}
`)
        if (!response.ok) {
            const err = await response.text();
            throw new Error(`${response.status},${err}`)
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log('Loi', error)
    }
}
api('hanoi')

const input = document.getElementById('input')
const cityName = document.querySelector('.city-name')
const cityTem = document.querySelector('.temperature')
const cityTime = document.querySelector('.time')
const cityCond = document.querySelector('.condition')
const cityIcon = document.querySelector('.icon')
const button = document.querySelector('.btn')


button.addEventListener('click', async () => {
    const city = input.value.toLowerCase();
    const data = await api(city)
    cityName.textContent = data.location?.name ?? 'No data';
    cityTem.textContent = data.current?.temp_c + 'C' ?? 'No data';
    cityTime.textContent = data.location?.localtime ?? 'No data';
    cityCond.textContent = data.current?.condition.text ?? 'No data';
    cityIcon.innerHTML = `<img src="${data.current?.condition.icon ?? 'No data'}">`;

})

