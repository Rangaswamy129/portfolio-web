import { useEffect, useState } from "react";

const Typing = () => {
  const text = "Full Stack Developer.";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return <span className="gradient-text">{display}</span>;
};

export default Typing;