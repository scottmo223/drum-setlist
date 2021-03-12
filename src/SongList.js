import React from 'react'
import Song from './Song'

const SongList = ({songList, handleToggle}) => {
    return (
        <div>
            {songList.map(song => {
                return (
                    <Song song = {song} handleToggle={handleToggle} />
                )
            })}
        </div>
    )
}

export default SongList