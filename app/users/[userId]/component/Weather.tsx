const Weather = async () => {

    // const data = await getWeather()
    return (
        <div>Weather</div>
    )
}

export default Weather;

const getWeather = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Failed to fetch weather data')
        },4000)
    })
}