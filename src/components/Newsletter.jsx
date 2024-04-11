import BannerImg from '../assets/undraw_feeling_happy_jymo.svg'
import {motion} from 'framer-motion';
import {fadeIn} from '../Variable';
const Newletter = () => {
    return(
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <div className="gradientBg md:flex-row flex  flex-col-reverse rounded-br-[90px] rounded-xl px-4 py-9  text-white">
                <motion.div
                variants={fadeIn('right',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.2}}
                className=" mt-8 px-4 py-7">
                    <h1 className='md:text-6xl text-4xl font-bold mb-4 mt-2'>Each student can share their discount code for friends </h1>
                    <p className='font-semibold text-2xl'>
                    A simple paragraph is comprised of three major components. the first sentence, which is often a declarative sentence, is called the topic sentence.
                    </p>
                    <div className="mt-5 flex gap-3">
                        <button className='btnPrimary'>I have code</button>
                        <button className='btnPrimary'> I had</button>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn('left',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.5}}
               
                 className="md:text-center flex gap-4 ">
                    <img src={BannerImg} alt="" />
                </motion.div>
            </div>
        </div>
    )
}
export default Newletter;