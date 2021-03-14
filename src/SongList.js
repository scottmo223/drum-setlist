import React from 'react'
import Song from './Song'

const SongList = ({ songList, handleToggle }) => {
    return (
        <div>
            {songList.map(song => {
                return (
                    <Song song={song} handleToggle={handleToggle} key={song.id} />
                )
            })}
        </div>
    )
}

export default SongList