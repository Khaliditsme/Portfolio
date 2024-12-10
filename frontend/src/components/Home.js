import image from '../asset/khalid.jpg';
import portfolio from '../asset/Portfolio_.gif';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "https://portfolio-33v4.onrender.com";
const Home = () => {
  const skills = [
    'frontend development',
    'backend development',
    'Competitive programming',
  ];
  const [currentSkill, setCurrentSkill] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // For the Dynamic Text
  useEffect(() => {
    let typingInterval;
    if (isTyping) {
      // Typing effect
      typingInterval = setInterval(() => {
        setCurrentSkill((prev) => {
          if (prev.length < skills[index].length) {
            return prev + skills[index][prev.length];
          } else {
             // If the word is fully typed, stop typing and move to the next skill
             clearInterval(typingInterval);
             setIsTyping(false); // Stop typing after the word is fully typed
             return prev;
            }
          });
        }, 110); // Speed of typing
      } else {
       // After typing is complete, wait for a second, then move to the next skill
       const changeSkillTimeout = setTimeout(() => {
         setIndex((prevIndex) => (prevIndex + 1) % skills.length); // Loop back to the first skill
         setCurrentSkill(""); // Clear the current word
         setIsTyping(true); // Start typing the new word
        }, 1000); // Wait for 1 second before changing skill
        
        return () => clearTimeout(changeSkillTimeout); // Cleanup the timeout if component unmounts
      }
      
      return () => clearInterval(typingInterval); // Cleanup the interval if component unmounts
    }, [isTyping, index]);
    

    // Logic for Coffee with me 
    const list =['Firstname please','Lastname please',' Message for me','Email id please'];
    
    const [idx,setidx]=useState(0);
    const [count,setcount] = useState(0);
    const [fname,setfname] = useState(''); //
    const [lname,setlname] = useState(''); //
    const [message,setmessage] = useState('');  //
    const [email,setemail] = useState('');  //
    const [subject, setsubject] = useState(''); //
    const [text, setext] = useState('');
    const [raw,setraw] = useState('');
    const [result, setresult] = useState(false);  //
     
   useEffect(()=>{
      setext(list[idx]);
   },[idx])

    const movenext = async () => {
      if (idx === 0) {
        setfname(raw);
        console.log("First name is : ", raw);
      } else if (idx === 1) {
        setlname(raw);
        console.log("last name is : ", raw);
      } else if (idx === 2){
        setmessage(raw);
        console.log("message is : ", raw);
      }
      else if(idx===3){
        setemail(raw);
        setsubject("Coffee with Khalid");
        console.log("email is : ", raw);
      }
      setraw("");
      setidx((prev) => (prev + 1) % 4);
      setcount(prev=>(prev+1)%4);
    };
    
    useEffect(()=>{
      if(email && subject){
        SendMail();
      }
    },[email,subject]);

    useEffect(()=>{
      const interval = setTimeout(()=>{
        setresult(false);
      },4000)
      return ()=> clearInterval(interval);
    },[result])

    const SendMail = async () => {
      try {
        const response = await axios.post(
          "https://portfolio-33v4.onrender.com/contact",
          {
            fname,
            lname,
            email,
            subject,
            message,
          }
        );
        console.log("success");
        setresult(true);
      } catch (err) {
        console.log("failure");
      }
    };
  
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center  w-[90vw] m-auto p-4">
        <div className="sm:w-[50vw] md:w-[40vw] lg:w-[30vw] mb-6 sm:mb-0">
          <img
            src={image}
            alt="Khalid"
            className="w-full rounded-full object-cover"
          />
        </div>

        <div className="text-center lg:text-left sm:w-[50vw] md:w-[60vw] lg:w-[70vw] sm:pl-6">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 sm:mb-6">
            Hello
          </h1>
          <h3 className=" text-center lg:text-left font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-5 sm:mb-7 md:mb-9">
            A Bit About Me
          </h3>
          <h3 className="text-center lg:text-left font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-5 sm:mb-7 md:mb-9">
            I am into <span className="text-red">{currentSkill}</span>
          </h3>
          <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10">
            I'm Khalid, a developer passionate about Data Structures and Problem
            Solving. I specialize in creating user-friendly web solutions with
            technologies like ReactJS and Node.js. I’m always exploring new
            tools and frameworks to expand my skill set and solve complex
            problems. I'm committed to continuous growth and open to new
            opportunities and collaborations.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
            <div className="w-40 h-30  lg:h-30 lg:w-40 border-2 border-black rounded-full bg-red p-6 sm:p-10 font-semibold text-sm sm:text-1xl md:text-2xl lg:text-2xl flex items-center justify-center">
              <Link to="/resume">Resume</Link>
            </div>
            <div className="w-40 h-30 lg:h-30 lg:w-40 border-2 border-black rounded-full bg-red p-6 sm:p-10 font-semibold text-sm sm:text-1xl md:text-2xl lg:text-2xl flex items-center justify-center">
              <Link to="/project">Projects</Link>
            </div>
            <div className="w-40 h-30 lg:h-30 lg:w-40 border-2 border-black rounded-full bg-red p-6 sm:p-10 font-semibold text-sm sm:text-1xl md:text-2xl lg:text-2xl flex items-center justify-center">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/*  New Section started */}

      <div className="relative m-5">
        <img src={portfolio} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 font-custom flex items-end justify-center font-thinbold  text-white text-[20px] sm:text-2xl md:text-5xl lg:text-6xl mb-2 lg:mb-[90px]">
          <h1>{currentSkill}</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-5xl m-2">
          Coffee With Me
        </div>
        <div className="text-[25px] sm:text-1xl md:text-2xl lg:text-3xl text-grey m-2 text-center">
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          <div className="text-2xl font-semibold sm:text-1xl md:text-2xl lg:text-3xl text-grey  mt-9">{text}</div>
          <div>
            <div className="flex flex-row justify-center items-center">
              <input type="text" value={raw} onChange={(e)=>setraw(e.target.value)} className="border-2 border-black bg-grey h-10 w-[40vw] mt-5 bg-fumewhite"/>
              <button className="font-extrabold text-5xl" onClick={movenext}>→</button>
            </div>
              <div className='flex flex-col justify-end items-end'><h1>{count}/4</h1></div>
          </div>
        </div>

        {(result)? <div className=" text-2xl font-semibold sm:text-1xl md:text-2xl lg:text-3xl text-grey font-thin m-2">
          Thank you! I'll contact you shortly.
        </div> : <div></div>}
      </div>
    </div>
  );
};

export default Home;
