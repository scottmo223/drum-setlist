import React, { useState } from 'react'
import './App.css';
import Header from './Header'
import data from './data.json'
import SongList from './SongList'

function App() {
  const [songList, setSongList] = useState(data)

  const handleToggle = (id) => {
    let mapped = songList.map(task => {
      return task.id === parseInt(id) ? {...task, complete: !task.complete} : {...task}
    })
    setSongList(mapped)
  }

  const handleFilter = () => {
    let filtered = songList.filter(song => {
      return !song.complete
    })
    setSongList(filtered)
  }

  return (
    <div className="App">
      <Header />
      <SongList songList={songList} handleToggle={handleToggle} handleFilter={handleFilter} />
    </div>
  );

}

export default App;
