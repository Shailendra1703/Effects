import React from "react";

const Thunder = ({ cursor, cardsRef, mouseOnCard }) => {
  const [gradientCenter, setGradientCenter] = React.useState({
    cx: "50%",
    cy: "50%",
  });

  React.useEffect(() => {
    if (cardsRef.current !== null && cursor.x !== null && cursor.y !== null) {
      const { width, height } = cardsRef.current.getBoundingClientRect();
      setGradientCenter({
        cx: `${(cursor.x / width) * 100}% - 24`,
        cy: `${(cursor.y / height) * 100}%`,
      });
    }
  }, [cursor, cardsRef]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-96 duration-200 transition-all"
    >
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          r={"35%"}
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor="#10B981" />}
          <stop offset="1" stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-950/50"
        stroke="url(#emeraldGradient)"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
};

export default Thunder;
