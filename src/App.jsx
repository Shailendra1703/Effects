import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import Flame from "./components/Flame";
import Earth from "./components/Earth";
import Spider from "./components/Spider";
import Thunder from "./components/Thunder";

const App = () => {
  const cardsRef = useRef(null);

  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = React.useState(false);

  const handleMouseMove = (e) => {
    if (cardsRef.current !== null) {
      const { left, top } = cardsRef.current.getBoundingClientRect();
      setCursor({
        x: e.clientX - left,
        y: e.clientY - top,
      });
    }
  };

  return (
    <main className="w-full h-screen flex place-items-center justify-center">
      <section
        className="card"
        ref={cardsRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
      >
        <div className="flex flex-col w-2/5 justify-between ">
          <div className="flex flex-col gap-5">
            <CircleStackIcon className="w-14 rounded-lg bg-neutral-900/70 stroke-emerald-500 p-2 shadow-inner" />
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
              Database
            </h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              Every project is a full Postgres database, the world's most
              trusted relational database.
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>100% Portable</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Easy to extent</p>
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          {/* <Flame
            cursor={cursor}
            cardsRef={cardsRef}
            mouseOnCard={mouseOnCard}
          /> */}
          <Thunder
            cursor={cursor}
            cardsRef={cardsRef}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
