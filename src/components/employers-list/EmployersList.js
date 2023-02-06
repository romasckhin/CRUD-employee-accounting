import EmployerslistItem from '../employers-list-item/EmployersListItem'
import './employers-list.css'

const Employerslist = ({data, deleteItem}) => {


    const elements = data.map(el => {
        return (
            <EmployerslistItem 
                {...el} 
                key={el.id}
                deleteItem={() => deleteItem(el.id)}
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