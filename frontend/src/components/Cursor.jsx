import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // smooth lag effect
      setTimeout(() => {
        setFollower({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{ left: pos.x, top: pos.y }}
      ></div>

      <div
        className="cursor-follower"
        style={{ left: follower.x, top: follower.y }}
      ></div>
    </>
  );
};

export default Cursor;