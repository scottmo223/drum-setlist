import React, { useState } from 'react'



const NewSongForm = ({addSong}) => {
    const [userInput, setUserInput] = useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(userInput)
        setUserInput('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange} placeholder='something' />
            <button>Add Song</button>
        </form>
    )
}

export default NewSongForm