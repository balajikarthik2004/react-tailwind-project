import logo from '../assets/img1.jpg'
import insta from '../assets/bxl-instagram (1).svg'
import linkedin from '../assets/bxl-linkedin-square.svg'
import youtube from '../assets/bxl-youtube.svg'
import twitter from '../assets/bxl-twitter.svg'
const Footer = () =>{
    return(
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-prinmary '>
                    <img src={logo} alt="logo" className='w-10 inline-block items-center'/>
                    <span className='text-white'>XYZ</span>
                </a>
                    <p className='md:w-1/2'> A simple paragraph is comprised of three major components. the first sentence, which is often a declarative sentence, is called the topic sentence</p> <div className="">
                    <input type='email' id='email' placeholder='Your email' name='email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
                    <input type='submit' value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-prinmary duration-200 transition-all '/>
                </div>
                </div>

                {/* Footer items */}
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                <div className="space-y-5">
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3 mt-4'>
                            <a href="/" className='block hover:text-gray-300'>OverView</a>
                            <a href="/" className='block hover:text-gray-300'>Features</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                </div>
               
                <div className="space-y-4">
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3 mt-4'>
                            <a href="/" className='block hover:text-gray-300'>How does it works?</a>
                            <a href="/" className='block hover:text-gray-300'>Where to ask Questions?</a>
                            <a href="/" className='block hover:text-gray-300'>How to play?</a>
                            <a href="/" className='block hover:text-gray-300'>what is needed for this?</a>
                        </ul>
                </div>
               
                <div className="space-y-4">
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3 mt-4'>
                            <p className=' hover:text-gray-300'>(123) 1234-987-345</p>
                            <p className=' hover:text-gray-300'>123 xyz-xyz</p>
                            <p className=' hover:text-gray-300'>Give your feedback for this site.</p>
                            <p className=' hover:text-gray-300'>8826393262</p>
                        </ul>
                </div>
               </div>
            </div>
            <hr />
            <div className="flex flex-col sm:items-center justify-between  mt-5 mx-5 sm:flex-row">
                <p>@ BALAJI..XYZ2004.COM . All Rights Reserved.</p>
                <div className="flex space-x-5  items-center cursor-pointer ">
                    <img src={insta} alt="" className='hover:-translate-y-4 duration-200 transition-all'/>
                    <img src={youtube} alt="" className='hover:-translate-y-4 duration-200 transition-all'/>
                    <img src={linkedin} alt="" className='hover:-translate-y-4 duration-200 transition-all'/>
                    <img src={twitter} alt="" className='hover:-translate-y-4 duration-200 transition-all'/>
                </div>
            </div>
        </div>

        

    )
}
export default Footer;