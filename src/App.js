import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }
    
    async componentDidMount() {
        const fecthData = await fetchData();
        this.setState({data: fecthData});
    }

    render() {
        const { data } = this.state;
        return (
            <div c>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;