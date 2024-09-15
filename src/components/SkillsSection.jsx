import { FaArrowTurnDown } from "react-icons/fa6";
import { IoLogoJavascript, IoPieChartOutline } from "react-icons/io5";
import { SiAntdesign, SiBootstrap, SiExpress, SiFirebase, SiMongodb, SiReactquery, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbWorld ,TbSql} from "react-icons/tb";
import { RiMoreFill, RiNextjsFill } from "react-icons/ri";
import "../assets/css/style.css";




const Skills = () => {


  const skills01 = [
    {
    name: "Javascript",
    icon: <IoLogoJavascript/>,
   },
   {
    name: "Typescript",
    icon: <SiTypescript/>,
   },
   {
    name: "HTML/CSS",
    icon: <TbWorld/>,
   }]


   const skills02 = [
    {
    name: "ReactJs",
    icon: <IoLogoJavascript/>,
   },
   {
    name: "NextJs",
    icon: <RiNextjsFill/>,
   },
   {
    name: "NodeJs",
    icon: <IoLogoJavascript/>,
   },
   {
    name:"ExpressJs",
    icon: <SiExpress/>
   },
   { 
    name:"Tailwind Css",
    icon: <SiTailwindcss/>
   },
   {
    name:"Ant Design",
    icon: <SiAntdesign/>
   },
   {
    name: "Bootstrap",
    icon: <SiBootstrap/>,
   },
   {
    name:"Recharts",
    icon: <IoPieChartOutline/>
   },
   {
    name:"React Query",
    icon: <SiReactquery/>
   },
   {
    name: "More.." ,
    icon: <RiMoreFill/>
   }

   ]

   const skills03 = [
    {
      name: "MongoDB",
      icon: <SiMongodb/>,
    },
    {
      name:"MySQL",
      icon: <TbSql/>
    },
    {
      name: "Firebase",
      icon: <SiFirebase/>,
    },
   ]

  return (
   <div className="bg-white dark:bg-black dark:text-white flex justify-center overflow-hidden items-center flex-col pb-10 scroll-smooth">
     <h1 className="text-center text-4xl font-bold">
        My <span className="text-purple-700">Skills <FaArrowTurnDown className="inline-block text-black dark:text-gray-100" /> </span>
      </h1>

   <div className="md:mt-2 md:p-2 w-full md:w-5/6 px-7 md:px-12 ">


     <div className="w-full md:w-5/6 flex flex-wrap items-center gap-2 mt-8 ">
       {skills01.map((skill,index) => {
         return (
           <div data-aos="fade-up-right" key={index} className="skils-btn flex items-center bg-purple-700 text-white gap-2 font-sans shadow-lg font-semibold rounded-xl text-md p-2 ">
            <span> {skill.icon}</span>
             <span>{skill.name}</span>
           </div>
         );
       })}

     </div>
     <div className="w-full md:w-5/6 flex flex-wrap items-center  gap-3 mt-7 ">
       {skills02.map((skill,index) => {
         return ( 
           <div  data-aos="fade-down-right" key={index} className="skils-btn flex items-center bg-purple-700 text-white shadow-lg gap-2 font-sans font-semibold rounded-xl text-md p-2">
            <span> {skill.icon}</span>
             <span>{skill.name}</span>
           </div>
         );
       })}

     </div>
     <div className="w-full md:w-5/6 flex flex-wrap items-center gap-3 mt-7">
       {skills03.map((skill,index) => {
         return ( 
           <div data-aos="fade-up-left" key={index} className="skils-btn flex items-center bg-purple-700 text-white shadow-lg gap-2 font-sans font-semibold rounded-xl text-md p-2">
            <span> {skill.icon}</span>
             <span>{skill.name}</span>
           </div>
         );
        })}

     </div>

        </div>

   </div>
  );
};

export default Skills;


