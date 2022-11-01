import React, { useState } from 'react'
import { DATA } from './data'
import List from './List'
import './index.css';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
function AppBirthday() {
    const [people, setPeople] = useState(DATA.filter((person) => {
        return today.split('-')[1] === person.birthday.split('-')[1] && today.split('-')[0] === person.birthday.split('-')[0]
    }))
    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthday today</h3>
                <List people={people} year={yyyy} />
                <button className='buttoncss' onClick={() => { setPeople([]) }}>Clear All</button>
            </section>
        </main>

    );
}

export default AppBirthday;