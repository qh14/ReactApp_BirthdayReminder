import React from "react";
function List(props) {
    return (
        <React.Fragment>
            {props.people.map((person) => {
                const { id, name, birthday, image } = person;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p> {parseInt(birthday.split("-")[2], 10) - parseInt(props.year, 10)} age</p>
                        </div>
                    </article>)
            })}
        </React.Fragment>
    );
}

export default List;