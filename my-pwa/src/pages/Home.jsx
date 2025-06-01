import { Link, useLocation } from "react-router-dom";
import homeData from "../assets/home.json";

function Home({ lang = "nl" }) {
  return (
    <div className="p-4 mb-18 dark:text-white text:black">
      <div className="text-white bg-graytext w-20 text-center rounded-2xl">
        <h2>>Home</h2>
      </div>
      <div className="flex flex-col-reverse  justify-center items-center">
        <h1 className="w-80 text-center bg- mb-2 text-3xl font-bold rounded-4xl p-2 bg-accent">
          {homeData.homeTitle[lang]}
        </h1>

        <img
          className="w-40 pt-10 pb-5 dark:hidden  rounded-2xl mb-2"
          src="/imges/logo_black.svg"
          alt=""
        />
        <img
          className="w-40 pt-10 pb-5 hidden dark:flex rounded-2xl mb-2"
          src="/imges/logo_white.svg"
          alt=""
        />
      </div>

      <div className="flex flex-col mt-20 mb-20 gap-7 justify-center items-center">
        <h2 className="text-4xl bg-graytext p-3 flex items-center justify-center w-50 rounded-3xl  font-semibold bg-">
          {homeData.stagesTitle[lang]}
        </h2>

        <div className=" gap-1  flex flex-row overflow-auto  w-90">
          <div className="gap-5 flex flex-row">
            {homeData.stages.map((stage) => (
              <button
                className="flex flex-col w-55 h-65"
                key={stage.name[lang]}
              >
                <img
                  className="w-55 h-55 object-cover rounded-xl"
                  src={stage.src}
                  alt="stages"
                />
                <p className=" dark:bg-graytext dark:items-center dark:justify-center dark:m-auto dark:rounded-xl dark:w-50 dark:p-1 dark:mt-1 text-shadow-2xs flex font-bold text-3xl">
                  {stage.name[lang]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row- mt-10 gap-5 justify-center items-center">
        <p className="font-semibold w-40 h-60 bg-footer text-xl  p-2 rounded-xl">
          {homeData.infoText[lang]}
        </p>
        <Link to="/music">
          <img
            className="rounded-xl dark:hidden h-50 w-50"
            src="/imges/schedule.png"
            alt="schedule"
          />
          <img
            className="rounded-xl hidden dark:flex h-50 w-50"
            src="/imges/schedule_dark.png"
            alt="schedule"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
