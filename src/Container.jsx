import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
//
import SearchBar from "./SearchBar.jsx";
import ArrowIcon from "./ArrowIcon.jsx";
import VoiceModal from "./VoiceModal.jsx";
import Reddit from "./Reddit.jsx";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AudioRecorder from "./AudioRecorder.jsx";

export default function Container() {
  const [openVoiceModal, setOpenVoiceModal] = useState(false);
  const [firstresponse,setFirstResponse]=useState(true);
  const [chatValues, setChatValues] = useState([]);

  const callApi = (query) => {
    console.log(query);
  
    if (!chatValues.length ) {
        setFirstResponse(false)
    }
  
    setChatValues((prevChatValues) => [
      ...prevChatValues,
      { [query]: 'Hello World Hello World Hello World Hello World Hello World' },
    ]);
  
    // console.log(chatValues);
  };
  

  return (
    <div className="chatbot">
      <div className="modalOpen">
        {openVoiceModal && <AudioRecorder />}
        <div class="Response">
        {
          
            chatValues.map((item,index)=>{
                return(         <>   <div class="user" >{Object.keys(item)}</div>

            <div class="system">{Object.values(item)}</div></>  
                );
            })
        
        }
         </div>
        {firstresponse&&
        <div className="aiIcon">
        <Reddit />
        </div>}
      </div>
      <div className="inputOutput">
        <ArrowIcon />
      </div>
      <SearchBar
        openVoiceModal={openVoiceModal}
        setOpenVoiceModal={setOpenVoiceModal}
        callApi={callApi}
      />
    </div>
  );
}
