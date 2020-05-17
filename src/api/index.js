import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data : {confirmed, recovered, deaths}} = await axios.get(url);

        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
        }
        return modifiedData;
    } catch(e) {

    }
}