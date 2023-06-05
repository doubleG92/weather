import { API_KEY , API_URL , API_VERSION} from './constants.js';
import { setErrorMessage, setEventById } from './helpers.js';

const gettingWeather = () => {
    const inputValue = document.getElementById('searchInput').value.trim();
    if (inputValue) {
        fetch(`${API_URL}/${API_VERSION}/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
            .then((resp) => {
                return resp.json();
            })
            .then(data => {
                document.getElementById('city').innerHTML = data.name;
                document.getElementById('country').innerHTML = data.sys.country;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp) + ' °C';
                setErrorMessage('')
            })
            .catch(() => {
                console.log('request errrrrror');
            })
    } else {
        setErrorMessage('Please enter the city name')
    }
}

setEventById('searchButton', 'click', gettingWeather);

const whichButton = (event) => {
    if (event.code === 'Enter') {
        gettingWeather()
    }
}

setEventById('searchInput', 'keyup', whichButton)
