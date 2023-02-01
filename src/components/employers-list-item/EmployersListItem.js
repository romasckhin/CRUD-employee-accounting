import './employers-list-item.css'
import { DiCssTricks  } from "react-icons/di";
import { BsFillTrashFill } from "react-icons/bs"

const EmployersListItem = ({name, salary, increase}) => {


    return (
        <li className='app-list-item' >
            <div className='list-item-flex'>
                <div className='item-name'>
                    {name}      
                </div>
                <div className='item-salary' >
                    {salary}
                </div>
                <div className='item-btn'>
                    <button className='btn-tricks'>{<DiCssTricks/>}</button>
                    <button className='btn-trash'>{<BsFillTrashFill/>}</button>
                </div>
            </div>
        </li>
    );
};

export default EmployersListItem;