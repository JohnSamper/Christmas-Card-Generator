import React, { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import cardimgurl from "../assets/img/cardimg.png";
import cardbg1 from "../assets/img/bgimg1.png";
import cardbg2 from "../assets/img/bgimg2.png";
import cardbg3 from "../assets/img/bgimg3.png";
import cardbg4 from "../assets/img/bgimg4.png";
import cardbg5 from "../assets/img/bgimg5.png";
import cardbg6 from "../assets/img/bgimg6.png";
import cardbg7 from "../assets/img/bgimg7 .png";
import cardbg8 from "../assets/img/bgimg8.png";
import cardbg9 from "../assets/img/bgimg9.png";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [randomImgae, setRandomImgae] = useState(null); // ✅ state

  const [quote, setQuote ] = useState(""); 

  const [signoff , setSignoff] = useState("");

  const [name , setName ] = useState("")

  const loadMessage = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file");

      const response = await fetch(backendUrl + "/api/hello");
      const data = await response.json();

      if (response.ok) dispatch({ type: "set_hello", payload: data.message });

      return data;
    } catch (error) {
      if (error.message)
        throw new Error(
          `Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
        );
    }
  };


  const cardBackgrounds = [
    cardimgurl,
    cardbg1,
    cardbg2,
    cardbg3,
    cardbg4,
    cardbg5,
    cardbg6,
    cardbg7,
    cardbg8,
    cardbg9,
  ];

  const cardQuotes = [ 
    
    "May your days be merry and bright.",
  "Warm wishes for a joyful Christmas season.",
  "Tis the season to sparkle and shine.",
  "Wishing you love, peace, and holiday cheer.",
  "May your Christmas be filled with joy and laughter.",
  "Sending cozy vibes your way this holiday season.",
  "Believe in the magic of Christmas.",
  "May your heart be light and your world be bright.",
  "Wishing you comfort, joy, and all things festive.",
  "Let your heart be full and your worries light.",
    
  ];

  const signoffQuotes = [
    "With love and warm wishes,",
    "Warmest holiday wishes,", 
    "Wishing you joy and comfort,",
    "With heartfelt holiday cheer,",
    "Sending love this season,",
    "Stay cozy and bright," ,
    "Wrapped in warm wishes," , 
    "Sending cozy holiday vibes,",
    "Hope your days are merry,", 
    "Cheers to comfort and joy,",
    "With Love, ", 
    "Best Wishes,",
    "Stay Cozy,", 
    "Merry & Bright,",

  ];

  useEffect(() => {
    // this it the logic for the random image 
    const randomIndex = Math.floor(Math.random() * cardBackgrounds.length);
    const selectedImage = cardBackgrounds[randomIndex];
    setRandomImgae(selectedImage);
    

    // this is the logic for the random quote 

    const randomQuoteIndex = Math.floor(Math.random()* cardQuotes.length);
    const selectedQuote= cardQuotes[randomQuoteIndex];
    setQuote(selectedQuote); 


    // this is the logic for the random signnoff quotes

    const randomSignoffIndex = Math.floor(Math.random() * signoffQuotes.length );
    const selectedSignoffQuote = signoffQuotes[randomSignoffIndex]; 
    setSignoff (selectedSignoffQuote)


    console.log("Random card:", { selectedImage, selectedQuote, selectedSignoffQuote });
  }, []);
 
  useEffect(() => {
    loadMessage();
  }, []);

  return (
    <div className="home-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card square-card text-center">
          {randomImgae && (
            <img src={randomImgae} className="card-img" alt="card background" />
          )}

          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h1> Merry christmas(quotes) </h1>

            <h1 className=" mb-2 p-3"> {quote}  </h1>
    

            <p>
              {signoff}
              {name && ` ${name}`}
            </p>

          </div>
        </div>
      </div>

      <div >
        <p className="d-flex justify-content-center align-items-center ">  please input name :) </p>
      <input
              type="text"
              className="form-control w-75 mx-auto mb-3"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> 
        <p>save icon </p>
        <p> email icon </p>
      </div>
  
    </div>
  );
};
// to-do 
// you need to make an array for the Merry chrismas quotes (also create the states :)  )
// find out what fonts ypu can use and inport them. 
//upload icons forrm Font awesome 
// figura out how to conect an email APi like Twilio SendGrid Email API to send the card to emails 
// find out how to save the image 
