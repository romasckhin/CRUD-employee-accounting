import './app.css'
import Employerslist from '../employers-list/EmployersList'
import { v4 as uuidv4 } from 'uuid';
import Counter from '../counter/Counter';
import EmployersAddForm from '../employers-add-form/EmployersAddForm';
import React, { Component } from 'react';
import AppInfo from '../app-info/AppInfo';

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

     onToggleIncrease = (id) => {
        this.setState( ({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
     }

    render() {

        const {data} = this.state
        const employees = this.state.data.length
        const premium =  this.state.data.filter(item => item.increase).length

        return (
            <div className="container">

            <Counter/>
            
            <AppInfo
               employees={employees}
               premium={premium}
            />

            <Employerslist
                data={data}
                deleteItem={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
            />

            <EmployersAddForm
                addItem={this.addItem}
            />

        </div>
        );
    }
}

export default App;