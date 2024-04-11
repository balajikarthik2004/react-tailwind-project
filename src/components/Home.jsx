import banner from '../assets/undraw_fashion_blogging_re_fhi5.svg'
import {motion} from 'framer-motion'
import {fadeIn} from '../Variable';
const Home = () =>{
    return(
        <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-28 " id='home'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 gradientBg round-xl rounded-br-[80px] md:p-9 px-4 py-9">
                     <motion.div
                      variants={fadeIn('down',0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false,amount:0.7}}
                     >
                        <img src={banner} alt="" className='lg:h-[386px]'/>
                    </motion.div>
                     <motion.div
                     variants={fadeIn('up',0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false,amount:0.7}}
                     >
                    <div className="md:w-3/4">
                        <h2 className='md:text-7xl text-4xl text-white mb-6 font-bold leading-relaxed'>develop Your Skills without diligence</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8'>A good example of a pragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in china.</p>
                        <div className='space-x-6 space-y-5'>
                            <button className='btnPrimary'>Get started</button>
                            <button className='btnPrimary '>Discount</button>
                        </div>
                    </div>
                   
                </motion.div>
            </div>

        </div>
    )
}
export default Home;