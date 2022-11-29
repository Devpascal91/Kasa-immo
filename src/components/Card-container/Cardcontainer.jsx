import React from 'react';
import { NavLink } from 'react-router-dom';
import './cardcontainer.scss';

const Cardcontainer = ({cards}) => {
    return (
        <div className='container'>
        

            {cards.map((card, index) => {
                return (
                    <NavLink to={`/logement/${card.id}`} key={index} className="card">
                        <h2>{card.name}</h2>
                        <p>{card.text}</p>
                    </NavLink>
                                
                )
            })}
            
        </div>
    );
};

export default Cardcontainer;