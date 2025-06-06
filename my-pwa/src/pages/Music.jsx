
import schedule from "../assets/schedule.json";
import {  useState, useRef } from "react";
import EventModule from "../components/eventModule";
import acts from "../assets/acts.json";


function timeToIndex(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return (hours + minutes / 60 - 9.5) * 4;
}

function generateTimeLabels() {
  const times = [];

  for (let i = 0; i < 59; i++) {
    let totalMinutes = 9 * 60 + 30 + i * 15;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    const displayHour = (hours % 24).toString().padStart(2, "0");
    times.push(`${displayHour}:${minutes.toString().padStart(2, "0")}`);
  }
  return times;
}

function Music({ lang = "nl" }) {
  const [day, setDay] = useState("Zaterdag");
  const stages = schedule["LoveU Festival 2026"][day];
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showGenreMenu, setShowGenreMenu] = useState(false);
  const genreButtonRef = useRef();
  const timeLabels = generateTimeLabels();

  const allGenres = Array.from(
    new Set(
      Object.values(stages)
        .flat()
        .map((event) => event.event.genre)
    )
  );

  const findArtist = (name) =>
    acts.find(
      (a) =>
        a[lang].name.toLowerCase() === name.toLowerCase() ||
        a.nl.name.toLowerCase() === name.toLowerCase() ||
        a.en.name.toLowerCase() === name.toLowerCase()
    );

  return (
    <div className="p-4 h-screen">
      <div>
        <h1 className="text-white mb-2  bg-graytext w-23  text-center rounded-2xl">
          >Schedule
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setDay("Zaterdag")}
          className={`text-white transition-colors ease-in-out mb-2  ${
            day === "Zaterdag" ? "bg-footer" : "bg-graytext"
          } w-23  text-center rounded-2xl`}
        >
          {schedule.dayText.Zaterdag[lang]}
        </button>
        <button
          onClick={() => setDay("Zondag")}
          className={`text-white transition-colors ease-in-out mb-2  ${
            day === "Zondag" ? "bg-info" : "bg-graytext"
          } w-23  text-center rounded-2xl`}
        >
          {schedule.dayText.Zondag[lang]}
        </button>
        <div className="relative">
          <button
            ref={genreButtonRef}
            onClick={() => setShowGenreMenu((v) => !v)}
            className="text-white truncate pl-1 overflow-hidden whitespace-nowrap w-16 text-center rounded-2xl transition-colors ease-in-out bg-graytext mb-2"
            aria-haspopup="true"
            aria-expanded={showGenreMenu}
            aria-controls="genre-menu"
          >
            {selectedGenre === "All" ? "All" : selectedGenre}
          </button>
          <div
            id="genre-menu"
            className={`
              absolute left-0 mt-1 bg-accent rounded-xl p-1 w-32 shadow-lg flex flex-col
              transition-all duration-300 origin-top z-50
              ${showGenreMenu ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}
            `}
            tabIndex={-1}
            role="menu"
            aria-hidden={!showGenreMenu}
          >
            <button
              onClick={() => {
                setSelectedGenre("All");
                setShowGenreMenu(false);
                genreButtonRef.current?.focus();
              }}
              className="text-white px-3 py-1 rounded hover:bg-footer"
              role="menuitem"
            >
              All
            </button>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => {
                  setSelectedGenre(genre);
                  setShowGenreMenu(false);
                  genreButtonRef.current?.focus();
                }}
                className="text-white px-3 py-1 rounded hover:bg-footer"
                role="menuitem"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" dark:text-white h-5/6 items-center justify-center">
        <div className="overflow-x-auto">
          {/* header time */}
          <div className=" grid grid-cols-[100px_repeat(59,minmax(4rem,1fr))] text-xs text-center font-semibold mb-5">
            <div className=""></div>
            {timeLabels.map((t, idx) => (
              <div
                key={idx}
                className="bg-grayText border-r-1  h-10 flex items-center justify-center border-gray-300"
              >
                {t}
              </div>
            ))}
          </div>

          {/* stage rows */}
          <div className="">
            {Object.entries(stages).map(([stageName, events], rowIndex) => (
              <div
                key={stageName}
                className="grid grid-cols-[100px_repeat(59,minmax(4rem,1fr))] mb-10"
              >
                {/* names*/}
                <div
                  className={` ${
                    stageName === "Poton"
                      ? "bg-accent"
                      : stageName === "The Lake"
                      ? "bg-graytext"
                      : stageName === "The Club"
                      ? "bg-info"
                      : "bg-footer"
                  } rounded-xl text-lg font-bold flex items-center justify-center`}
                >
                  {stageName}
                </div>

                {/* blocks */}
                <div className="relative    col-span-59  h-20">
                  {events
                    .filter(
                      (event) =>
                        selectedGenre === "All" ||
                        event.event.genre === selectedGenre
                    )
                    .map((event, idx) => {
                      const start = timeToIndex(event.start);
                      const end = timeToIndex(event.end);
                      const span = end - start;
                      return (
                        <button
                          key={idx}
                          className={`absolute ${
                            stageName === "Poton"
                              ? "bg-accent"
                              : stageName === "The Lake"
                              ? "bg-graytext"
                              : stageName === "The Club"
                              ? "bg-info"
                              : "bg-footer"
                          } rounded-2xl h-full text-white text-[1rem] font-semibold p-2 shadow-md overflow-hidden whitespace-nowrap`}
                          style={{
                            left: `${(start / 59) * 100}%`,
                            width: `${(span / 59) * 100}%`,
                          }}
                          onClick={() => {
                            const artist = findArtist(event.event[lang]);
                            setSelectedArtist(artist || null);
                          }}
                        >
                          {event.event[lang]}
                          <div className="text-[0.7rem]">
                            {event.start} - {event.end}
                          </div>
                        </button>
                      );
                    })}
                  <div
                    className={`w-full ${
                      stageName === "Poton" ? "border-none" : "border-b-1"
                    }   border-gray-300 -my-5 `}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EventModule
        artist={selectedArtist}
        lang={lang}
        onClose={() => setSelectedArtist(null)}
      />
    </div>
  );
}

export default Music;
