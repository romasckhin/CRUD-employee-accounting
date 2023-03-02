import EmployerslistItem from '../employers-list-item/EmployersListItem'
import './employers-list.css'

const Employerslist = ({data, deleteItem, onToggleIncrease}) => {


    const elements = data.map(el => {
        return (
            <EmployerslistItem 
                {...el} 
                key={el.id}
                deleteItem={() => deleteItem(el.id)}
                onToggleIncrease={() => onToggleIncrease(el.id)}
            />
        )
    })

    return (
        <ul className='app-list' >
             {elements}
        </ul>
    );
};

export default Employerslist