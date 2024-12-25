import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genereId, selectedGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);
  
  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      console.log(res.data.results);
      setGenreList(res.data.results);
    });
  };

  return (
    <div className="px-6">
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genereId(item.id);
            selectedGenresName(item.name);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer
            hover:bg-gray-300 p-2 group
            rounded-lg hover:dark:bg-gray-600
            ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}
        >
          <img
            src={item.image_background}
            className="w-[50px] h-[50px] object-cover rounded group-hover:scale-105 transition-all ease-out duration-300"
            alt=""
          />
          <h3 className={`dark:text-white text-[18px]
                group-hover:font-bold transition-all
                ease-out duration-300 ${activeIndex==index?"font-bold":null}`}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
