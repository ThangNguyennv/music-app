"use client";

import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio: any = document.querySelector(".inner-audio");

    if (elementPlayAudio) {
      const elementButtonPlay =
        elementPlayAudio.querySelector(".inner-button-play");
      if (elementButtonPlay.classList.contains("play")) {
        elementButtonPlay.classList.remove("play");
        elementAudio.pause();
      } else {
        elementButtonPlay.classList.add("play");
        elementAudio.play();
      }
    }
  };

  const handleNext = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idSongCurrent = elementPlayAudio.getAttribute("song-id");
    if (idSongCurrent) {
      const songList: any = document.querySelector("[song-list]");
      if (songList) {
        const elementSongCurrent = songList.querySelector(
          `[data-song="${idSongCurrent}"]`
        );
        const elementSongNext = elementSongCurrent.nextElementSibling;
        if (elementSongNext) {
          const buttonPlay =
            elementSongNext.querySelector(".inner-button-play");
          buttonPlay.click();
        }
      }
    }
  };
  const handlePrevious = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idSongCurrent = elementPlayAudio.getAttribute("song-id");
    if (idSongCurrent) {
      const songList: any = document.querySelector("[song-list]");
      if (songList) {
        const elementSongCurrent = songList.querySelector(
          `[data-song="${idSongCurrent}"]`
        );
        const elementSongPrevious = elementSongCurrent.previousElementSibling;
        if (elementSongPrevious) {
          const buttonPlay =
            elementSongPrevious.querySelector(".inner-button-play");
          buttonPlay.click();
        }
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]" onClick={handlePrevious}>
          <FaBackwardStep />
        </button>
        <button
          onClick={handlePlay}
          className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-full inline-flex items-center justify-center mx-[42px] inner-button-play play"
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>

        <button className="text-white text-[16px]" onClick={handleNext}>
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
