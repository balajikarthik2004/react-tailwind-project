import Feartures from '../assets/undraw_road_to_knowledge_m8s0.svg';
import {motion} from 'framer-motion'
import {fadeIn} from '../Variable';
const Features = () =>{
    return(
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='feature'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                variants={fadeIn('right',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                
                className=" lg:w-1/4">
                    <h3 className="text-3xl text-prinmary font-bold lg:w-1/2 mb-3">Why We are better than othes</h3>
                    <p className="text-base text-third">A simple paragraph is comprised of three major components. the first sentence, which is often a declarative sentence, is called the topic sentence</p>
                </motion.div>
                {/* Features cards */}
                <motion.div 
                 variants={fadeIn('left',0.3)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once:false,amount:0.2}}
                
                className="w-full lg:w-3/4">
                   <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                   <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                        <div className="">
                            <img src={Feartures} alt="" className='w-48'/>
                            <h5 className='text-2xl font-semibold text-prinmary px-5 text-center mt-5'>Convertient Study schedule</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                        <div className="">
                            <img src={Feartures} alt="" className='w-48'/>
                            <h5 className='text-2xl font-semibold text-prinmary px-5 text-center mt-5'>Convertient Study schedule</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                        <div className="">
                            <img src={Feartures} alt="" className='w-48'/>
                            <h5 className='text-2xl font-semibold text-prinmary px-5 text-center mt-5'>Convertient Study schedule</h5>
                        </div>
                    </div>
                   </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Features;