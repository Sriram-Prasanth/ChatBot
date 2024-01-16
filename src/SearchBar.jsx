import Textarea from "@mui/joy/Textarea";
import ArrowIcon from "./ArrowIcon";
import VoiceIcon from "./VoiceIcon";
import Button from "@mui/material/Button";
import { useState, useRef  } from "react";
import { imageListClasses } from "@mui/material";
import stopIcon from "./assets/icons/StopRecording.png"
import AudioRecorder from "./AudioRecorder";

export default function SearchBar({ setOpenVoiceModal, openVoiceModal ,callApi}) {
  const [input, setInput] = useState("");
  let [recordOption, setRecordOption] = useState("video");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };
  return (
    <div className="searchBar">
      <Textarea
        placeholder="Type anything…"
        className="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div className="searchButtons">
        <button className="arrow" onClick={()=>{callApi(input);console.log('After');setInput('')}}>
          <ArrowIcon />
        </button>
        <Button
          className="voiceIcon"
          onClick={() => {
            setOpenVoiceModal(!openVoiceModal);
          }}
        >
{!openVoiceModal ? <VoiceIcon /> : <img style={{width:'33px'}} onClick={()=>{callApi('test voice')}} src={stopIcon} alt="Stop Icon" />}
        </Button>
      </div>
    </div>
  );
}
