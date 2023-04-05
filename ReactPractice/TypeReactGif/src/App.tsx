import { useState } from "react"
import AddCategory from "./components/AddCategory"

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['One Pucnhs', 'Dragon Ball', 'OnePieces'])
    const [index, setindex] = useState(0)

    const onAddCategory = (): void => {
        setindex(index + 1)

        setCategories([...categories, `Mi verga ${index}`])
        console.log(categories)
    }
    return (
        <>
            <AddCategory setCategories={setCategories}></AddCategory>
            <button onClick={onAddCategory}></button>

            <ol>
                {categories.map((element) => { return (<li key={element}>{element}</li>) })}
            </ol>
        </>
    )
}