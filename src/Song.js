import React from 'react'

const Song = ({song, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    
    return (
        <div id={song.id} onClick={handleClick} className={(song.complete ? 'strike' : '') + ' songRow'} >
            <div className="songTitle">
                {song.title}
            </div>
            <div className="songArtist">
                {song.artist}
            </div>
            <div className="songTempo">
                {song.tempo}
            </div>
        </div>
    )
}

export default Song