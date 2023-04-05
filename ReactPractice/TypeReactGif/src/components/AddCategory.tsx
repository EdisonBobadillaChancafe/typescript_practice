import { useState } from "react"

export default function AddCategory({ setCategories }: any) {
    const [inputvalue, setinputValue] = useState('')

    function onchangeValue(event: any): void {
        setinputValue(event.target.value)
    }

    function sumitForm(event: any): void {
        event.preventDefault();
        if (inputvalue.trim().length <= 1) return;

        setinputValue('')
        setCategories((cate: any) => [...cate, inputvalue])
    }

    return (
        <>
            <form onSubmit={(event) => { sumitForm(event) }}>
                <input type={'text'} placeholder={'Buscar'} value={inputvalue} id='index' onChange={(event) => { onchangeValue(event) }}></input>
                <h1>{inputvalue}</h1>
            </form>

        </>
    )
}