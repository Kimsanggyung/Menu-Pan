import './App.css';
import { useState } from 'react';
import Main from './components/Main'
import Detail from './components/Detail'

function App() {

  const [stateData, setStateData] = useState('main');
  const [kategorie, setKategorie] = useState('all');
  const [menuList, setList] = useState(null);
  const [targetID, setTargetID] =useState(null);
  let view = null;

  if(stateData === 'detail'){
    view =
      <>
        <Detail targetID={targetID} menuList={menuList} setList={setList} setStateData={setStateData}></Detail>
      </>    
  }

  if(stateData === 'main'){
    view =
      <>
        <Main targetID={targetID} setTargetID={setTargetID} menuList={menuList} setList={setList} kategorie={kategorie} setKategorie={setKategorie} setStateData={setStateData}></Main>
      </> 
  }
 

  return (
    <>
      {view}
    </>
  );
}

export default App;
