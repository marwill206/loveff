import { useState } from "react";
import infoData from "../assets/info.json";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full text-left mb-2 bg-gray-200 px-4 py-2 rounded-lg font-bold"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-2" : "max-h-0"
        }`}
      >
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}

function Info() {
  const lang = "nl";
  return (
    <div>
      <div>
        <h1 className="text-white mb-6 bg-graytext w-20 text-center rounded-2xl">
          >Info
        </h1>
      </div>
      {infoData.map((section) => (
        <div key={section.section} className="mb-6">
          <h2 className="text-xl font-bold mb-3">{section[lang].title}</h2>
          {Object.entries(section[lang])
            .filter(([key]) => key !== "title")
            .map(([key, value]) => {
              if (typeof value === "string") {
                return (
                  <Accordion
                    key={key}
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <p>{value}</p>
                  </Accordion>
                );
              }

              if (typeof value === "object" && !Array.isArray(value)) {
                return (
                  <Accordion
                    key={key}
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    {Object.entries(value).map(([k, v]) => (
                      <p key={k}>
                        {k.charAt(0).toUpperCase() + k.slice(1)}: {v}
                      </p>
                    ))}
                  </Accordion>
                );
              }

              if (Array.isArray(value)) {
                return value.map((item, i) => (
                  <Accordion
                    key={key + i}
                    title={item.vraag || item.question || `Item ${i + 1}`}
                  >
                    <p>
                      {item.antwoord || item.answer || JSON.stringify(item)}
                    </p>
                  </Accordion>
                ));
              }
            })}
        </div>
      ))}
    </div>
  );
}

export default Info;
