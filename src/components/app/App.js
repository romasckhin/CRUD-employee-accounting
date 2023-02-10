import './app.css'
import Employerslist from '../employers-list/EmployersList'
import { v4 as uuidv4 } from 'uuid';
import Counter from '../counter/Counter';
import EmployersAddForm from '../employers-add-form/EmployersAddForm';
import React, { Component } from 'react';


class App extends Component {

     constructor(props) {
        super(props);

        this.state = {
             data : [
                { id: uuidv4(), name: 'John C.', salary: 1000, increase: false },
                { id: uuidv4(), name: 'Alex M.', salary: 50, increase: false },
                { id: uuidv4(), name: 'Carl W.', salary: 893, increase: false },
            ]
        }
     }

     deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)               
            }
        })
     }

     addItem = (name, salary) => {
        const newItem = { id: uuidv4(), name, salary, increase: false }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return { data: newArr }
        })
     }


    render() {

        const {data} = this.state

        return (
            <div className="container">

            <Counter/>

            <Employerslist
                data={data}
                deleteItem={this.deleteItem}
            />

            <EmployersAddForm
                addItem={this.addItem}
            />

        </div>
        );
    }
}

export default App;