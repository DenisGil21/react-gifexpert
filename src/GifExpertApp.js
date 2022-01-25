import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setcategories([...categories, 'dragon']);
    //     setcategories(cat => [...cat, 'ae']);
    // }

    return (
        <div>
            <h2>Gif Expert</h2>
            <hr />
            <AddCategory setCategories={setcategories} />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                        key={category} 
                        category={category}
                        />
                    )
                }
            </ol>
        </div>
    );
}

