import React from "react";

const ResulteCard = ({ item }) => {
  if (!item) return null;

  const addToCollection = (item) => {
    
  }

  return (
    <div className="w-full h-auto mb-4">
      {item.Type === "photo" ? (
        <div className="relative group">
          <a href={item.URL} target="_blank" rel="noopener noreferrer">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto rounded-lg object-cover cursor-pointer"
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="absolute w-full bottom-0 left-0 p-2 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
            <h3 className="mt-2 text-sm font-semibold text-white capitalize">
              {item.title}
            </h3>

            <button 
              className="bg-blue-500 active:scale-95 text-white px-4 py-2 text-sm rounded-lg ml-2 cursor-pointer"
              onClick={() => addToCollection(item)}
            >
              Save
            </button>
          </div>
        </div>
      ) : item.Type === "video" ? (
        <div className="w-full h-auto mb-4 relative group">
          <a href={item.URL} target="_blank" rel="noopener noreferrer">
            <video
              muted
              loop
              playsInline
              poster={item.thumbnail}
              className="w-full h-auto rounded-lg cursor-target"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              loading="lazy"
              decoding="async"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <div className="absolute w-full bottom-0 left-0 p-2 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
            <h3 className="mt-2 text-sm font-semibold text-white capitalize">
              {item.title}
            </h3>

            <button className="bg-blue-500 active:scale-95 text-white px-4 py-2 text-sm rounded-lg ml-2 cursor-pointer">
              Save
            </button>
          </div>
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-auto rounded-lg cursor-target"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default ResulteCard;
