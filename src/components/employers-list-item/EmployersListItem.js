import './employers-list-item.css'
import { DiCssTricks  } from "react-icons/di";
import { BsFillTrashFill } from "react-icons/bs"
import React, { Component } from 'react';


class EmployersListItem extends Component {

    constructor(props) {
        super(props)

        this.name = props.name
        this.salary = props.salary
        this.increase = props.increase

        this.className = {
            style: 'app-list-item'
        }
    }

    changeIncrease = () => {

        this.setState({
            increase: this.increase = !this.increase
        })

        if (this.increase) {

            this.setState({
             style: this.className.style = 'app-list-item increase'
            });

        } else {
            this.setState({
                style: this.className.style = 'app-list-item'
               });
        }
    }


    render() {
        return (
            <li className={this.className.style} >
                <div className='list-item-flex'>
                    <div className='item-name'>
                        {this.name}      
                    </div>
                    <div className='item-salary' >
                        {this.salary}
                    </div>
                    <div className='item-btn'>
                        <button title='Change content color' onClick={this.changeIncrease} className='btn-tricks'>{<DiCssTricks/>}</button>
                        <button className='btn-trash'>{<BsFillTrashFill/>}</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default EmployersListItem;