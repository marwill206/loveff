import { Link, useLocation } from "react-router-dom";

function Home() {
  const stages = [
    {
      name: "Poton",
      src: "https://gluwebdev.notion.site/image/attachment%3A045fb095-b9af-48fa-b6ac-d954b1aeb9b9%3Aimage.png?table=block&id=1f369bb8-092d-8056-93e2-cf8e459cb3fd&spaceId=0216a67a-859e-4730-996f-5d51b31fa395&width=1420&userId=&cache=v2",
    },
    {
      name: "The Lake",
      src: "https://gluwebdev.notion.site/image/attachment%3A40baa6dd-0165-4e93-8e9d-e911eca8c21c%3Aimage.png?table=block&id=1f369bb8-092d-8014-87d4-e6d4ab0c724a&spaceId=0216a67a-859e-4730-996f-5d51b31fa395&width=1420&userId=&cache=v2",
    },
    {
      name: "The Club",
      src: "https://gluwebdev.notion.site/image/attachment%3Ab3d23197-84b2-40f3-ab6f-ad5ceabc32d3%3Aimage.png?table=block&id=1f369bb8-092d-80fc-b782-ecfdb945ae4a&spaceId=0216a67a-859e-4730-996f-5d51b31fa395&width=1420&userId=&cache=v2",
    },
    {
      name: "Hanggar",
      src: "https://gluwebdev.notion.site/image/attachment%3A741bbb50-6e77-4c96-8acf-307e402b664d%3Aimage.png?table=block&id=1f369bb8-092d-80c3-956b-eb2f4d571d08&spaceId=0216a67a-859e-4730-996f-5d51b31fa395&width=1420&userId=&cache=v2",
    },
  ];
  return (
    <div className="p-4 mb-18">
      <div className="text-white bg-graytext w-20 text-center rounded-2xl"> <h2>>Home</h2></div>
      <div className="flex flex-col-reverse  justify-center items-center">
        <h1 className="w-80 text-center bg- mb-2 text-3xl font-bold rounded-4xl p-2 bg-accent">
          Welkom bij Love Festival
        </h1>

        <img
          className="w-70  rounded-2xl mb-2"
          src="/imges/whiteLogo.png"
          alt=""
        />
      </div>

      <div className="flex flex-col mt-20 mb-20 gap-5 justify-center items-center">
        <h2 className="text-4xl bg-graytext p-3 flex items-center justify-center w-50 rounded-3xl text-black font-semibold bg-">
          Stages
        </h2>

        <div className=" gap-1 flex flex-row overflow-auto  w-90">
          <div className="gap-5 flex flex-row">
            {stages.map((stage) => (
              <button className="flex flex-col w-55 h-65" key={stage.name}>
                <img
                  className="w-55 h-55 object-cover rounded-xl"
                  src={stage.src}
                  alt="stages"
                />
                <p className=" text-shadow-2xs flex ml-2 text-black font-bold text-3xl">
                  {stage.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row- mt-10 gap-5 justify-center items-center">
        <p className="font-semibold w-40 h-60 bg-footer text-xl  p-2 rounded-xl">
          Staat jouw favoriete Arties bij ons in het schema kijk nu:
        </p>
        <Link
        to="/music"
        >
        
        <img
          className="rounded-xl h-50 w-50"
          src="/imges/schedule.png"
          alt="schedule"
        />
        </Link>
      </div>
    </div>
  );
}

export default Home;
