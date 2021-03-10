import React from 'react'

const Song = ({song}) => {
    return (
        <div>
            {song.title} | {song.artist} | {song.tempo}
        </div>
    )
}

export default Song