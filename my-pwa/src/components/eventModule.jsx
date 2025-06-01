import React, { useState, useEffect } from "react";


function EventModal({artist, lang, onClose}) {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (artist) {
      setHidden(false);
      setTimeout(() => setVisible(true), 10); // allow DOM paint
    }
  }, [artist]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setHidden(true);
      onClose();
    }, 300); // match your fade-out duration
  };

  if (hidden) return null;

  return (
    <div
    className={`fixed inset-0 bg-black/60 z-10000 flex items-center justify-center transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    onClick={handleClose}>
      <div onClick={e => e.stopPropagation()} className="bg-white text-black dark:text-white relative w-3/4 p-3 dark:bg-dark items-center flex flex-col rounded-xl ">
        <button className="dark:text-graytext text-lightTextM font-bold" onClick={handleClose}>x</button>
        <h2 className="text-lg font-bold">{artist[lang].name}</h2>
        <h3 className="mb-2">{artist[lang].short}</h3>
        <a href={artist.video} target="_blank" rel="noopener noreferrer">
        <img className="w-40  rounded-xl" src={`/imges/${artist.image}`} alt="artist-img"/>
        </a>
        <p className="text-sm mt-2">{artist[lang].description}</p>
      </div>
    </div>
  )
}

export default EventModal;