import React from 'react'
import featuredImg from '../assets/featuredImg.png'

const Featuress = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <div className='lg:w-1/4'>
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>
                    Our Distinguishing Factors
                </h3>
                <p className='text-base text-tartiary'>
                    A simple paragraph is comprised of three major components. The first sentence, 
                    which is often a declarative sentence, is called the “topic sentence.”
                </p>
            </div>

            {/* featured cards */}
            <div>
                <div>
                    <div>
                        <img src={featuredImg} alt="card-1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featuress