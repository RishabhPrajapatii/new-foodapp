import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { NavLink } from 'react-router-dom';

const Home = () => {

  const [image, setimage] = useState("");
  const [count, setcount] = useState(0);
  const [decriment, setdecriment] = useState(0)
  const Datalist = async () => {
    const { data } = await axios.get("https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/data/feeds.json")
    console.log(data)
    setimage(data)

  }

  const increment = (e, i) => {


    const sum = (i) => (count + 1);

    setcount(sum)
    console.log(sum)
  }

  const Decrement = (e) => {

    if (decriment > 0) {
      const desum = decriment - 1;
      setdecriment(desum)
    }

  }

  useEffect(() => {
    Datalist();

  }, [])



  let imagelist = "loading.....";

  if (image.length > 0) {
    imagelist = image.map((img, i) => (
      <>

        <div className='card' key={i} > <img src={`https://bytebucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/${img.image}`} alt="" height={200} width={250} />

          <div className='text'><h4>{img.name}</h4>
            <h6>price:{img.price}</h6></div>
          <div className='show' >cost:{count * img.price}  </div>
          <div className="buttons">  <button key={i} className='plus' onClick={increment} >+ </button>

            <button className='minus' onClick={Decrement} >-</button></div>



        </div>
  



      </>
    ))
  }

  console.log(imagelist)
  return (

    <>
      <div className='nav'>
        <div className='startnav'>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" background-color='white' height="24" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg></div>
          <h3>Food's Restaurant</h3>
          <i class="ri-shopping-cart-line"></i></div>
      </div>

      <div className='home-main' value={imagelist}>
        {imagelist}

      </div>

    </>

  )
}

export default Home