import { DivOverlay } from "leaflet";
import schedule from "../assets/schedule.json";
import { useEffect, useState } from "react";
import EventModule from "../components/eventModule";
import acts from "../assets/acts.json"

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
  const timeLabels = generateTimeLabels();

const findArtist = (name) => 
  acts.find(
    (a) =>
      a[lang].name.toLowerCase() ===name.toLowerCase() ||
      a.nl.name.toLowerCase() === name.toLowerCase() ||
        a.en.name.toLowerCase() === name.toLowerCase()
  )


  return (
    <div className="p-4 h-screen">
      <div>
        <h1 className="text-white mb-2  bg-graytext w-23  text-center rounded-2xl">
          >Schedule
        </h1>
      </div>
      <div className="flex gap-4">
        <button 
        onClick={() => setDay("Zaterdag")}
        className={`text-white transition-colors ease-in-out mb-2  ${day === "Zaterdag" ? "bg-footer" : "bg-graytext"} w-23  text-center rounded-2xl`}>
          {schedule.dayText.Zaterdag[lang]}
        </button>
        <button 
        onClick={() => setDay("Zondag")}
        className={`text-white transition-colors ease-in-out mb-2  ${day === "Zondag" ? "bg-info" : "bg-graytext"} w-23  text-center rounded-2xl`}>
          {schedule.dayText.Zondag[lang]}
        </button>
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
                  {events.map((event, idx) => {
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
                          setSelectedArtist(artist || null)
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
