import React, { useState } from 'react'



const NewSongForm = ({addSong}) => {
    const [songInput, setSongInput] = useState('')
    const [artistInput, setArtistInput] = useState('')
    
    const handleChange = (event) => {
        if(event.target.name === 'song') {
            setSongInput(event.currentTarget.value)
        }else if(event.target.name === 'artist') {
            setArtistInput(event.currentTarget.value)
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addSong(songInput, artistInput)
        setSongInput('')
        setArtistInput('')
        document.querySelector('input').focus() //this works for now - may want to be more specific later
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={songInput} type='text' onChange={handleChange} placeholder='Song Title' name='song' />
            <input value={artistInput} type='text' onChange={handleChange} placeholder='Artist' name='artist' />
            <button>Add Song</button>
        </form>
    )
}

export default NewSongForm