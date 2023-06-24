import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Microphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <h1>Browser doesn't support speech recognition.</h1>;
  }

  console.log("Transcript", transcript);

  return (
    <div className=" h-screen max-w-md mx-auto">
      <p className="w-full mt-12 h-48 px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500">
        {transcript}
      </p>
      <br />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <br />
      <div className="flex justify-center mt-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={startListening}
        >
          Start
        </button>
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </button>
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={resetTranscript}
        >
          Reset
        </button>
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Microphone;
