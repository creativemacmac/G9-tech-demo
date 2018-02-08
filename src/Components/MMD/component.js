import React from 'react';
import { Link, Router } from 'react-router-dom';
import axios from 'axios';

class MMD extends React.Component {

    render() {
        axios.get('/media_data.json').then((res) => {
            console.log(res);
        });

        return (
            <div>
                <h1>MMD</h1>
            </div>
        )
    }
}

export default MMD;