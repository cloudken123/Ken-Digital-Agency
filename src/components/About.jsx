import aboutImg1 from '../assets/aboutImg1.png'
const  About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s max-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <img src = {aboutImg1} alt="" />
            </div>
            {/* about contents */}
            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                'There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default About