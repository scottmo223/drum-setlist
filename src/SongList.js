import React from 'react'
import Song from './Song'

const SongList = ({ songList, handleToggle, handleFilter}) => {
    return (
        <div>
            {songList.map(song => {
                return (
                    <Song song={song} handleToggle={handleToggle} key={song.id} />
                )
            })}
            <button onClick={handleFilter}>Delete Songs</button>
        </div>
    )
}

export default SongList