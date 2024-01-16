import Wave from "./assets/icons/Animation.gif";
import { useState, useEffect } from "react";
export default function VoiceModal() {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh(false);
      setTimeout(() => {
        setRefresh(true);
      }, 3000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="dragon">
        {refresh && <img className="wave" src={Wave} alt="" />}
      </div>
    </>
  );
}
