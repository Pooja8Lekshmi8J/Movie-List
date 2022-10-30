import React from "react";
import Page1 from '../list_page1.json';

const Movie = (props) => {
    const Page = Page1?.page?.contentitems;
    return (
        <>{Page && Page.content.map(data => {
            return ( 
            <div className='movie'>
                    <div>
                        <img
                            width='200'
                            alt={`The movie titled: ${data.name}`}
                            src={data.image}
                        />
                    </div>
                    <p style={{ color: "white" }}>{data.name}</p>
               
            </div>)
        })}</>
    );
};

export default Movie;