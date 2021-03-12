import React from 'react'

const Song = ({song, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    
    return (
        <div id={song.id} onClick={handleClick} className={song.complete ? "strike" : ""}>
            {song.title} | {song.artist} | {song.tempo}
        </div>
    )
}

export default Song