import axios from "axios";
import { useEffect, useState } from "react";
import '../css/Detail.css'

function Detail({targetID, setStateData}){

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [facts, setFacts] = useState('');
  const [price, setPrice] = useState('');
  const [allergy, setAllergy] = useState('');
  const [kategorie, setKategorie] = useState('');
  const [date, setDate] = useState('');

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/menu/${targetID}`)
    .then((response)=>{
      setImage(response.data.image)
      setName(response.data.name)
      setInfo(response.data.info)
      setFacts(response.data.facts)
      setPrice(response.data.price)
      setAllergy(response.data.allergy)
      setKategorie(response.data.kategorie)
      setDate(response.data.release_date)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[targetID])

  const exit = () =>{
    setStateData('main')
  }

  return(
    <>
      <div className="detailcontents">
        <div>
          <div>
            <img className="detailimage" src={image} alt={name + "상품사진"}></img>
          </div>
      
          <div>
            <div className="porductname">{name}</div>
          </div>

          <div className="pricebox">
            <div className="pricetag">가격: </div>
            <div className="price">{price}</div>
          </div>

          <div className="infobox">
            <div className="productinfo">{info}</div>
          </div>
      
        
          <div className="factsbox">
            <div>영양정보: </div>
            <div>{facts}</div>
          </div>

          <div className="allergybox">
            <div className="allergytag">알러지 성분: </div>
            <div>{allergy}</div>
          </div>

          <div className="kategoriebox">
            <div className="kategorietag">상품분류: </div>
            <div id="kategorieis">{kategorie}</div>
          </div>

          <div className="datebox">
            <div className="datetag">출시일: </div>
            <div className="date">{date}</div>
          </div>

          <div>
            <button onClick={exit}>메인화면</button>
          </div>

        </div>
      </div>
    </>
  )

}

export default Detail;