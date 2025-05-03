import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const restArr = [
    {
      foodName: "halwa pori",
      price: 40,
      item: "Breakfast",
      Link: "https://www.foodofpakistan.com/uploads/recipe/161338345211548488924.jpg",
    },
    {
      foodName: "nihari",
      price: 500,
      item: "dinner",
      Link: "https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=",
    },
    {
      foodName: "biryani",
      price: 300,
      item: "Lunch",
      Link: "https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=",
    },
    {
      foodName: "Anda Paratha",
      price: 70,
      item: "Breakfast",
      Link: "https://i.ytimg.com/vi/osIjRa3D5Pc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA47zbt7zuTt7LGd4zqLe6PNRvhXQ",
    },
    {
      foodName: "Mandi",
      price: 1500,
      item: "Lunch",
      Link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTjbHDziM8XulalaNIl0XtO_NdvJguvGoSg&s",
    },
    {
      foodName: "Daal Chawal",
      price: 100,
      item: "lunch",
      Link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIEnKPsNPAE9EwAdDJUGpaEcrZF16p7bqVQ&s",
    },
    {
      foodName: "Korma",
      price: 500,
      item: "Dinner",
      Link: "https://t3.ftcdn.net/jpg/02/28/09/64/360_F_228096414_PF4smFUTAqBUEMhDmeyntdSSq3Lz8CSN.jpg",
    },
    {
      foodName: "Beef Biryani",
      price: 700,
      item: "lunch",
      Link: "https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg",
    },
    {
      foodName: "Bhindi",
      price: 60,
      item: "lunch",
      Link: "https://greenbowl2soul.com/wp-content/uploads/2019/05/bhindi-masala-500x500.jpg",
    },
  ];

  // Filtered results based on search term
  const filteredData = restArr.filter((food) =>
    food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="w-full h-20 flex justify-center items-center">
        <input
          type="text"
          className="bg-black text-white outline-0 h-10 w-[200px] rounded py-5 px-10"
          placeholder="Enter your item name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container m-auto flex flex-wrap items-center justify-center gap-10 my-10">
        {filteredData.map((element, index) => {
          return (
            <Cards
              key={index}
              img={element.Link}
              price={element.price}
              item={element.item}
              foodName={element.foodName}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
