import React from 'react'
import Song from './Song'
import NewSongForm from './NewSongForm'

const SongList = ({ songList, handleToggle, handleFilter, addSong}) => {
    return (
        <div>
            {songList.map(song => {
                return (
                    <Song song={song} handleToggle={handleToggle} key={song.id} />
                )
            })}
            <NewSongForm addSong={addSong} />
            <button onClick={handleFilter}>Delete Songs</button>
        </div>
    )
}

export default SongList