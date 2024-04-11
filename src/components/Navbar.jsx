
import { useState } from 'react';
import logo from '../assets/logo.jpg'
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdLanguage  } from "react-icons/md";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }    
    const NavItems = [
        {link: "overview", path:"home"},
        {link: "Feature", path:"feature"},
        {link: "About", path:"about"},
        {link: "Pricing", path:"pricing"}
    ]
    //screen rolling effect
    return(
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-xl flex justify-between items-center container font-medium'>
                <div className='flex space-x-14 items-center '>
                <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-prinmary'>
                    <img src={logo} alt="logo" className='w-10 inline-block items-center rounded'/>
                    <span>XYZ</span>
                </a>
                <ul className='md:flex space-x-12 hidden'>
                    {
                    NavItems.map(({link,path})=><Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} href="" to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                    }
                </ul>
                </div>
            
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2'/><span>Language</span></a>
                    <button className='bg-secondary py-2 px-4 transition-all rounded hover:bg-indigo-600'>Sign Up</button>
                </div>
                
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-prinmary'/>) : (<FaBars className='w-6 h-6 text-prinmary'/>)
                        }
                    </button>
                </div>
            </div>
        

        </nav>

        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                 NavItems.map(({link,path})=><Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block text-white hover:text-gray-300 text-xl' 
                 onClick={toggleMenu}
                 >{link}</Link>)
            }
        </div>
        </>
    )
}
export default Navbar;