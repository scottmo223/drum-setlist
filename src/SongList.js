import React from 'react'
import Song from './Song'
import NewSongForm from './NewSongForm'

const SongList = ({ songList, handleToggle, handleFilter, addSong }) => {
    return (
        <div>
            <header className='songRow' >
                <h3 className='songTitle' >Song</h3>
                <h3 className='songArtist' >Artist</h3>
                <h3 className='songTempo' >Tempo</h3>
            </header>
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