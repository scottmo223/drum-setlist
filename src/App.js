import React, { useState } from 'react'
import './App.css';
import Header from './Header'
import data from './data.json'
import SongList from './SongList'

function App() {
  const [songList, setSongList] = useState(data)

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

  const addSong = (userInput) => {
    let tempList = [...songList]
    tempList = [...songList, {id: songList.length + 1, title: userInput, artist: 'todo', tempo: 5, selected: false}]
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
