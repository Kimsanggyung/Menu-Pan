import { useEffect, useState } from 'react';
import Itmes from './Items';
import Kategorie from './Kategorie';
import Buttons from './Buttons';
import '../css/main.css'

function Main({menuList, kategorie, setTargetID, setKategorie, setList, setStateData}) {

  const [Items, setItems] = useState()

  useEffect(()=>{
    if(kategorie === 'all'){
      setItems(
        <>
          <div id='alltitle'>전체메뉴</div>
          <Itmes menuList={menuList} setTargetID={setTargetID} setStateData={setStateData} setList={setList}/>
        </>
      
      )
    }
    if(kategorie !== 'all'){
      setItems(
        <>
          <div id='katagorietitle'>
            {kategorie+"메뉴"}
          </div>
          <Kategorie menuList={menuList} setList={setList}/>
      </>
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[menuList, kategorie])

  return (
    <>
      <div>
        <h1 className="maintitle">Menu Pan</h1>
        <Buttons setKategorie={setKategorie}></Buttons>
      </div>

      <div>
        {Items}
      </div>
    </>
  );
}

export default Main;