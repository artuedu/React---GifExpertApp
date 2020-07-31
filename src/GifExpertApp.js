import React, {useState} from 'react';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';


export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(categoria => (
                        <GifGrid
                            key={categoria}
                            category={categoria}
                        />
                    ))
                }
            </ol>
        </>
    );
}
