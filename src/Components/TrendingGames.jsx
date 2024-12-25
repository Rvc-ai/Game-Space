import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, []);

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-2 gap-4 lg:grid grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 cursor-pointer mt-5 ease-in-out">
                <img
                  src={item.image_background}
                  alt=""
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white p-2 text-[20px] font-bold">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
