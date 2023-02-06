import React, { Component } from 'react';
import './employers-add-form.css'

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
        }
    }    

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {

        const {name, salary} = this.state

        return (

            <div className='app-add-form'>

                <input name='name' onChange={this.onValueChange} value={name}/>
                <input name='salary' onChange={this.onValueChange} salary={salary} />
                
            </div>
        );
    }
}

export default EmployersAddForm;