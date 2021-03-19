import React, { useState } from 'react'
import './App.css';
import Header from './Header'
import data from './data.json'
import SongList from './SongList'

function App() {
  const [songList, setSongList] = useState(data)
  const [songId, setSongId] = useState(4)
  
  const handleToggle = (id) => {
    let mapped = songList.map(task => {
      return task.id === parseInt(id) ? {...task, selected: !task.selected} : {...task}
    })
    setSongList(mapped)
  }

  const handleFilter = () => {
    let filtered = songList.filter(song => {
      return !song.selected
    })
    setSongList(filtered)
  }

  const addSong = (songInput, artistInput, tempoInput) => {
    setSongId(songId + 1)
    let tempList = [...songList, {id: songId, title: songInput, artist: artistInput, tempo: tempoInput, selected: false}]
    setSongList(tempList)
  }

  return (
    <div className="App">
      <Header />
      <SongList songList={songList} handleToggle={handleToggle} handleFilter={handleFilter} addSong={addSong} />
      
    </div>
  );

}

export default App;
