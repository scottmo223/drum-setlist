import React, {useState} from 'react'
import './App.css';
import Header from './Header'
import data from './data.json'
import SongList from './SongList'
import Song from './Song'

function App() {
  const [songList, setSongList] = useState(data)

  return (
    <div className="App">
      <Header />
      <SongList songList = {songList}/>
    </div>
  );
}

export default App;
