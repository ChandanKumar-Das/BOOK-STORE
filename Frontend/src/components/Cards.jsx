import React from "react"

import Slider from "react-slick";
import Items from "./Items"
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () =>{
 
 const [book, setBook] = useState([])
 useEffect(()=>{
   const getBook = async()=>{
     try{
       const url= await axios.get('http://localhost:4001/book')
       //console.log(url)
       setBook(url.data.filter((data) => data.category === 'Free' ))
     }catch(error){

     }
   }
   getBook()
 },[])
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto my-8">
        <h1 className="font-bold text-xl py-1">Books</h1>
        <p className="py-1">Learning new and Grow Everday... </p>

         <div className="slider-container">
      <Slider {...settings}>
          {book.map((item)=>(
                <Items item={item} key={item.year}/>
          ))
          }
           
      </Slider>
    </div>


  
</div>
</>
 )
}

export default Cards