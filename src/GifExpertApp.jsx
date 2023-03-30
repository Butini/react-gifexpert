import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Zelda'])

    const onAddCategory = ( newCategory ) =>{
        //OTRAS SOLUCIONES
        //setCategories(cat => [...cat, 'Metroid'])

        //setCategories([...categories, 'Metroid'])
        //setCategories(['Metroid', ...categories])

        //concat agrega un elemento al final de la Array y devuelve la array nueva con el nuevo elemento
        //setCategories(categories.concat('Metroid'));

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        //console.log(newCategory);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => ( <GifGrid key={category} category={category} /> ))
            }
        </>

    );
}
