import './app.css'
import Employerslist from '../employers-list/EmployersList'
import { v4 as uuidv4 } from 'uuid';
import Counter from '../counter/Counter';

const App = () => {

    const data = [
        { id: uuidv4(), name: 'John C.', salary: 1000, increase: false },
        { id: uuidv4(), name: 'Alex M.', salary: 50, increase: false },
        { id: uuidv4(), name: 'Carl W.', salary: 893, increase: false },
    ]

    return (

        <div className="container">

            <Counter/>

            <Employerslist
                data={data}
            />

        </div>
    );
};

export default App;