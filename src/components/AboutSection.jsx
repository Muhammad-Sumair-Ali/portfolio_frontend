import DevImg from "../assets/pictures/developer.jpg";
import DevImgDark from "../assets/pictures/devDark.png";
import { FaArrowTurnDown } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about" className="bg-white dark:bg-black dark:text-white " >

      <h1 className="text-center text-4xl font-bold">
        About <span className="text-purple-700">Me <FaArrowTurnDown className="inline-block text-black dark:text-gray-100" /> </span>
      </h1>


      <section className="flex justify-center">
        <div className="mt-8 md:mt-4 p-5 md:p-0 w-full md:w-5/6  h-4/5 flex items-center  md:flex-row flex-col align-center justify-center gap-4">
        <div className="w-full ">
            <img className="h-96 m-auto block dark:hidden"  src={DevImg} alt="you like me.." />
            <img className="h-96 m-auto hidden dark:block"  src={DevImgDark} alt="you like me.." />
          </div> 
          <div className="w-full m-4 px-2">
            <p className="text-lg mb-4 px-7">
              Hey, I'm{" "}
              <span className="text-purple-700 font-bold dark:text-purple-600 text-xl">Muhammad Sumair</span>
              , a young and passionate<strong> MERN Stack Developer</strong>{" "}
              with just over 1+ year of experience. I’m all about building clean,
              user-friendly websites. I work with{" "}
              <span className="font-semibold"> JavaScript, ReactJS, NextJs, Redux, Firebase, Node.js, MongoDB </span>, and
              Serverless tech to create dynamic, responsive UIs. Let’s work
              together to bring your ideas to life!
            </p>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default About;
