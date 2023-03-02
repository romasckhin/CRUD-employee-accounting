import React, { Component } from 'react';
import './app-info.css'

class AppInfo extends Component {

    render() {

        return (
            <div className='app-info'>
                <h2>Number of employees: {this.props.employees}</h2>
                <h2>Premium: {this.props.premium} </h2>
            </div>
        );
    }
}

export default AppInfo;