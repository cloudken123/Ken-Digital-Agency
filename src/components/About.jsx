import {motion} from "framer-motion"
import {fadeIn} from '../variants'

import aboutImg1 from '../assets/aboutImg1.png'
import aboutImg2 from '../assets/aboutImg2.png'
const  About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s max-auto' id='about'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
            variants={fadeIn("down", 0.1)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}
            className='md:w-1/2'>
                <img src = {aboutImg1} alt="img" />
            </motion.div>
            {/* about contents */}
            
            <motion.div 
            
            variants={fadeIn("left", 0.1)}
             initial = "hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.5}}

                className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                    We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                'There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>
        </div>

        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div 
            
            variants={fadeIn("left", 0.1)}
             initial = "hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}

            className='md:w-1/2'>
                <img src = {aboutImg2} alt="img" />
            </motion.div>
            {/* about contents */}
            <motion.div 

            variants={fadeIn("right", 0.1)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}

            className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                    You can Practice at any <span className='text-secondary'>time convinent for you.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                'There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>
        </div>
    </div>

    
  )
}

export default About