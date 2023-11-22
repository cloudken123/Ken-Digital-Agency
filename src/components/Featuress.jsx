import {motion} from "framer-motion"
import {fadeIn} from '../variants'

import featuredImg from '../assets/featuredImg.png'

const Featuress = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <motion.div className='lg:w-1/4'
            variants={fadeIn("right", 0.1)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}>
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>
                    Our Distinguishing Factors
                </h3>
                <p className='text-base text-tartiary'>
                    A simple paragraph is comprised of three major components. The first sentence, 
                    which is often a declarative sentence, is called the “topic sentence.”
                </p>
            </motion.div>

            {/* featured cards */}
            <motion.div 
            
            variants={fadeIn("up", 0.1)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}

            className='w-full lg:w-3/4'>
               <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={featuredImg} alt="card-1" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-centermt-5'>
                                Conventient Study Schedule
                            </h5>
                        </div>
                    </div>

                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div>
                            <img src={featuredImg} alt="card-2" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-centermt-5'>
                                Available Skilled Mentors
                            </h5>
                        </div>
                    </div>

                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={featuredImg} alt="card-3" />
                            <h5 className='text-2xl font-semibold text-primary px-5 text-centermt-5'>
                                Rich Community
                            </h5>
                        </div>
                    </div>
               </div>

            </motion.div>
        </div>
    </div>
  )
}

export default Featuress