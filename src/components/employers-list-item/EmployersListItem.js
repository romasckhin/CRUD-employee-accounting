import './employers-list-item.css'
import { DiCssTricks  } from "react-icons/di";
import { BsFillTrashFill } from "react-icons/bs"
import { FcMoneyTransfer } from "react-icons/fc"
import { RxEnvelopeOpen } from "react-icons/rx"
import React, { Component } from 'react';


class EmployersListItem extends Component {


    constructor(props) {
        
        super(props)

        this.salaryEmployee = {
            salaryEmployee: false
        }
    }


    candidateForPromotion = () => {
        this.setState({
            salaryEmployee: this.salaryEmployee = !this.salaryEmployee
        })
    }


    render() {

        const {onToggleIncrease, name, salary, deleteItem, increase} = this.props

        
        let className = 'app-list-item'

        if (increase) {
            className += ' increase'
        } 


        return (
            <li className={className} >
                <div className='list-item-flex'>

                    <div className='item-name'>
                        {this.salaryEmployee? 
                            <div className='item-name-icon'>
                                <RxEnvelopeOpen/>
                            </div>
                            :
                            <div className='item-name-icon'>
                                <FcMoneyTransfer/>
                            </div>
                        }
                        <div onClick={this.candidateForPromotion}>{name}</div>    
                    </div>

                    <div className='item-salary' >
                        {salary}
                    </div>

                    <div className='item-btn'>
                        <button title='Change content color' onClick={onToggleIncrease} className='btn-tricks'>{<DiCssTricks/>}</button>
                        <button className='btn-trash' onClick={deleteItem} >{<BsFillTrashFill/>}</button>
                    </div>

                </div>
            </li>
        );
    }
}

export default EmployersListItem;