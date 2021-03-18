import React, { useState } from 'react'



const NewSongForm = ({addSong}) => {
    const [songInput, setSongInput] = useState('')
    
    const handleChange = (event) => {
        setSongInput(event.currentTarget.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addSong(songInput)
        setSongInput('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={songInput} type='text' onChange={handleChange} placeholder='something' />
            <button>Add Song</button>
        </form>
    )
}

export default NewSongForm