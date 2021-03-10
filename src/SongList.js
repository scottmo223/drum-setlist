import React from 'react'
import Song from './Song'

const SongList = ({songList}) => {
    return (
        <div>
            {songList.map(song => {
                return (
                    <Song song = {song} />
                )
            })}
        </div>
    )
}

export default SongList