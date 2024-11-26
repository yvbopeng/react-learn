import { useState } from "react";

const buttonListData = [
    {
        id: "Q",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        description: 'Heater 1'
    },
    {
        id: "W",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        description: 'Heater 2'
    },
    {
        id: "E",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        description: 'Heater3'
    },
    {
        id: "A",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        description: 'Heater 4'
    },
    {
        id: "S",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        description: 'Clap'
    },
    {
        id: "D",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        description: 'Open HH'
    },
    {
        id: "Z",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        description: 'Kick n Hat'
    },
    {
        id: "X",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        description: 'Kick'
    },
    {
        id: "C",
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        description: 'Closed HH'
    }
]

export default function DrumMachine() {

    function emitAudio(key) {
        const audio = document.querySelector(`audio[id="${key}"]`);
        if (audio) {
          audio.play();
          audio.currentTime = 0;
        }
    }

    document.addEventListener("keydown", function(e) {
      const key = e.key;
      emitAudio(key)
    });

    const [display, setDisplay] = useState("")
    function displayInfo(e){
        setDisplay(e.target.dataset.info)
        const key = e.target.id;
        emitAudio(key)
    }

    return (
        <div id="drum-machine">
            <div id="display">{display}</div>
            {
                buttonListData.map((button) => (
                    <div className="drum-pad" key={button.id} onClick={displayInfo} data-info={button.description} id={button.id}>{button.id}
                        <audio className="clip" id={button.id} src={button.src}></audio>
                    </div>
                ))
            }
        </div>
    )
}