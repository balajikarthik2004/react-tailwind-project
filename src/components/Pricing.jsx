import { useState } from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../Variable';
// import green from '../assets/green.png'
const Pricing =() =>{

    const [isYearly,setisYearly] = useState(false);

    const Package =[
        {name:"Start", monthlyPrice:"19", yearlyPrice:"199",desciption:"A common Pricing Lorem ipsum, dolor sit amet consectetur adipisicing elit.",green:'/src/assets/green.png'},
        {name:"Advance", monthlyPrice:"39", yearlyPrice:"399",desciption:"A common Pricing Lorem ipsum, dolor sit amet consectetur adipisicing elit.",green:'/src/assets/green.png'},
        {name:"Premium", monthlyPrice:"59", yearlyPrice:"599",desciption:"A common Pricing Lorem ipsum, dolor sit amet consectetur adipisicing elit.",green:'/src/assets/green.png'}
    ]

    return(
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h1 className="md:text-5xl text-3xl text-prinmary font-extrabold mb-2">Here are all our plans</h1>
                <p className="text-third md:w-1/3 mx-auto px-4">A simple pragraph is comprised of three major components. the which is often declared sentence.</p>

                {/* toggle Pricing */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-400 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-prinmary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden"  checked={isYearly} onChange={() => setisYearly(!isYearly)}/>
                </div>
            </div>

            {/* pricing cards */}

            <motion.div 
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.2}}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    Package.map((Pkg,index)=><div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-prinmary">{Pkg.name}</h3>
                        <p className="text-third text-center my-5">{Pkg.desciption}</p>
                        <p className=" text-center font-bold text-4xl text-secondary">
                            {isYearly ? `$${Pkg.yearlyPrice}` : `$${Pkg.monthlyPrice}`}<span className="text-base text-third font-medium"> /{isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4"> 
                            <li className="flex gap-3 items-center
                            "><img src={Pkg.green} className="w-8 h-8"/>Video Lessons</li>
                            <li className="flex gap-3 items-center
                            "><img src={Pkg.green} className="w-8 h-8"/>Homework check</li>
                            <li className="flex gap-3 items-center
                            "><img src={Pkg.green} className="w-8 h-8"/>Additional pratical task</li>
                            <li className="flex gap-3 items-center
                            "><img src={Pkg.green} className="w-8 h-8"/>Monthly conferences</li>
                            <li className="flex gap-3 items-center
                            "><img src={Pkg.green} className="w-8 h-8"/>Personal advice from teaching</li>
                        </ul>
                        <div className="w-full mx-auto mt-8 flex justify-center items-center">
                            <button className="btnPrimary">Get started</button>
                            </div>
                    </div>)
                }
            </motion.div>
        </div>
    )
}

export default Pricing;