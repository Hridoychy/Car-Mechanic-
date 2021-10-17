import React from 'react';
import one from '../../../images/expert/1.jpg'
import two from '../../../images/expert/2.jpg'
import three from '../../../images/expert/3.jpg'
import four from '../../../images/expert/4.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img: one,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: two,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: three,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: four,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]
const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary">our experts </h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;