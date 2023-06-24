import { useState } from "react";
import { Link } from "react-router-dom";

import { AiFillAudio } from "react-icons/ai";

const Test = () => {
  const [answer, setAnswer] = useState("");
  const [qdata, setQdata] = useState([]);
  const [count, setCount] = useState(0);
  const data = {
    bot: "\n\n1. What is the MERN stack?\n2. What are the benefits of using the MERN stack?\n3. How do I set up a development environment for a MERN application?\n4. What are some common challenges when working with the MERN stack?\n5. What libraries and frameworks are commonly used in a MERN application?",
  };

  const botResponse = data.bot;
  const questions = botResponse
    .split("\n")
    .filter((question) => question.trim() !== "");

  // console.log(questions);

  function showQues(count) {
    setCount((p) => p + 1);
  }

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleAnswer = () => {
    const q = {
      question: questions[count],
      ans: answer,
    };
    setQdata((p) => [...p, q]);
    console.log(q);
    // setAnswer("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(qdata);
    // Perform any necessary actions with the answer
    //  console.log("Submitted answer:");
    // Reset the answer state
    setAnswer("");
  };

  return (
    <div className="container mx-auto">
      <div className=" p-4 ">
        <h1 className="text-5xl font-bold text-white">
          You can <span className="text-yellow-500">Prepare better</span> with
          us
        </h1>
        <p className="text-white">
          {" "}
          The Al-powered app will help you improve yourself by helping you for
          practing interview.
        </p>
      </div>
      <div className="mx-auto w-1/2 border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Question Answer Page
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h3>{questions[count]}</h3>
          <textarea
            value={answer}
            onChange={handleAnswerChange}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 border"
            rows="6"
            placeholder="Enter your answer..."
          ></textarea>
          <div className="mt-4">
            <Link to="/microphone">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <AiFillAudio />
              </button>
            </Link>

            {qdata.length == 5 ? (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-4"
                type="submit"
              >
                Submit Test.
              </button>
            ) : (
              <>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-4"
                  onClick={handleAnswer}
                >
                  {/* <IoMdSend /> */}
                  Submit Answer
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-4"
                  onClick={showQues}
                >
                  Next
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
