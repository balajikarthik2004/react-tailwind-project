import AboutImg1 from '../assets/undraw_reading_time_re_phf7.svg'
import AboutImg2 from '../assets/undraw_my_universe_803e.svg'
import {motion} from 'framer-motion';
import {fadeIn} from '../Variable';
const About = () =>{
    return(
        
        <div className="md:px-14 p-4 max-w-s mx-auto" id='about'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 space-y-7 ">
                <motion.div
                variants={fadeIn('right',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="md:w-1/2">
                    <img src={AboutImg1} alt="" />
                </motion.div>
                {/* About Content */}
                <motion.div 
                variants={fadeIn('left',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="md:w-2/5">
                    <h2 className='md:text-5xl text-3xl font-bold text-prinmary mb-5 leading-normal'>
                        We have been improving our product <span className='text-secondary'> for many years.</span>
                    </h2>
                    <p className='text-third text-lg mb-7'>a good example of a pragraph conatins a topic conclusion .there are many kings of animals living in this earth.</p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>
            {/* second part */}
            <motion.div
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-10">
                <div className="md:w-1/2">
                    <img src={AboutImg2} alt="" />
                </div>
                {/* About Content */}
                <motion.div
                variants={fadeIn('right',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="md:w-2/5">
                    <h2 className='md:text-5xl text-3xl font-bold text-prinmary mb-5 leading-normal'>
                        You can Practice at any <span className='text-secondary'> time convinent fr you.</span>
                    </h2>
                    <p className='text-third text-lg mb-7'>a good example of a pragraph conatins a topic conclusion .there are many kings of animals living in this earth.</p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default About;
