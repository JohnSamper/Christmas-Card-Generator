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

  // ✅ all card backgrounds in one array
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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cardBackgrounds.length);
    const selectedImage = cardBackgrounds[randomIndex];
    setRandomImgae(selectedImage);
    console.log("Random card img:", selectedImage);
  }, []); // empty deps → runs once
 
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
            <h1 className="mb-3">Greating</h1>
            <p>Generate Christmas Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};
