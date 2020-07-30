import React, {useState} from 'react';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

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
