const About=()=>{
    return(
        //sticky top-0
        //bg-[#0a192f]
        const ExperienceTracker = () => {
  // Set the initial state to 8 months of experience
  const [experience, setExperience] = useState(8);

  useEffect(() => {
    // 30 days in milliseconds
    const monthInMilliseconds = 30 * 24 * 60 * 60 * 1000;

    // This will run every 30 days
    const intervalId = setInterval(() => {
      setExperience(prevExperience => prevExperience + 1);
    }, monthInMilliseconds);

    // Cleanup interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
        <div name='about' className=" w-full h-screen bg-[#0a192f] text-gray-300    sticky  top-0">
                <div className="flex flex-col justify-center items-center w-full h-full ">
                        <div className="max-w-[1000px]  w-full px-4 grid grid-cols-2 gap-8">
                            <div className="sm:text-right pb-8 pl-4">
                                <p className="text-4xl font-bold inline border-b-4 b border-b-pink-600">About</p>
                            </div>
                            <div></div>
                        </div>

                        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                            <div className="text-xl sm:text-4xl  font-bold">
                                    <p>Hi.I'm <span className="text-pink-600">Rithesh</span>,nice to meet ya.Please take a look around to know more.</p>
                            </div>
                            <div>
                                I'm a automation test engineer by profession having experince about {experience} months  and a passionate developer by skills graduated with 
                                a degree in computer science. Primary location Mangalore & works in Hyderbad/Bangalore


                            </div>
                        </div>
                        </div>
                </div>
        
    );
}

export default About;
