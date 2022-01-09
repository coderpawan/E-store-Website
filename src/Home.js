import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="images/shopping poster.jpg"
          alt="add"
          className="home_image"
        />
      </div>
      <div className="home_row">
        <Product
          id="1"
          title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
          price="500"
          image="images/samsung tv.png"
          rating={3}
        />
        <Product
          id="2"
          title="SAMSUNG 7.2 kg with Double Storm Technology Semi Automatic Top Load White  (WT725QPNDMPXTL 02)"
          price="800"
          image="images/samsung wash.png"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="LCS-8188 BLUE DIAL AND SILVER STRAP DAY & DATE FUNCTIONING WATCH FOR BOYS Analog Watch - For Men"
          price="5"
          image="images/watch.jpeg"
          rating={4}
        />
        <Product
          id="4"
          title="Qualimate Sewing Machine for Home Tailoring with Table Silai Machine Tailor Stitching Machines with Accessories"
          price="800"
          image="images/sewing.jpg"
          rating={2}
        />
        <Product
          id="5"
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Black Glass Door)"
          price="1000"
          image="images/fridge.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Lenovo ThinkBook 13s Intel 11th Gen Core i5 13.3 (33.78 cm) WQXGA IPS 300 nits 100% sRGB Dolby Vision Thin and Light "
          price="1200"
          image="images/laptop.jpg"
          rating={2}
        />
        <Product
          id="7"
          title="Scarters Groove - 20L Laptop Backpack,Bag for Office/College/Business/Travel for Laptop & MacBook Upto 15.6 inches ~ Grey"
          price="50"
          image="images/bag.jpg"
          rating={3}
        />
        <Product
          id="8"
          title="Boult Audio ProBass Thunder Over-Ear Wireless Bluetooth Headphones with Mic, Headset with Passive Noise Cancellation & Long Battery Life"
          price="15"
          image="images/headphone.jpg"
          rating={4}
        />
      </div>
    </div>
  );
};

export default Home;
