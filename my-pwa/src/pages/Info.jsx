import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button 
      className="w-full text-left bg-gray-200 px-4 py-2 rounded-lg font-bold"
      onClick={() => setOpen((prev) => !prev)}>{title}</button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-2" : "max-h-0"
        }`}
      >
        {" "}
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <div>
        <h1 className="text-white bg-graytext w-20 text-center rounded-2xl">
          >Info
        </h1>
      </div>
      <div>
        <Accordion title="Algemeen & Contact">
           <p>
          Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en is een aanvulling op UIT.
        </p>
        <p>
          Locatie: Strijkviertel, Utrecht<br />
          Navigatieadres: Strijkviertelweg, Utrecht
        </p>
        <p>
          Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
        </p>
        </Accordion>
        
      </div>
    </div>
  );
}

export default Info;
