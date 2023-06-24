import { Link } from "react-router-dom";
import mainimg from "../assets/ai-interview.jpg";
const Home = () => {
  const FeatureCard = ({ title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  return (
    <div>
      <div className=" flex justify-center mt-20">
        <div className="flex  w-4/5">
          <div>
            <h1 className="text-7xl font-bold text-center text-white">
              Your Journey starts here!
            </h1>
            <Link to="/trackform">
              <button className=" ml-56 mt-16 bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110">
                Get Started
              </button>
            </Link>
          </div>

          <div>
            <img
              src={mainimg}
              alt="ai interview img"
              className="border rounded"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <FeatureCard
              title="AI powered interview simulator"
              description="Prepare for interviews with our advanced AI simulator, which provides realistic interview scenarios and feedback to help you improve."
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <FeatureCard
              title="Audio support for answers"
              description="Answer questions in audio format with our audio support feature. Practice articulating your thoughts effectively and enhance your communication skills."
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <FeatureCard
              title="Interactive and user friendly"
              description="Experience an interactive and user-friendly interface that makes it easy to navigate through different sections and utilize the platform's features."
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <FeatureCard
              title="Track your Progress"
              description="Keep track of your progress as you practice and learn. Set goals, view your performance analytics, and stay motivated on your journey to success."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
