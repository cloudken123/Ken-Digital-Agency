import Banner from "../shared/Banner";
import bannerimg from '../assets/newsletter.png'

const Newsletter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
    {/* use our banner component to pass props */}
    <Banner banner={bannerimg} heading="Each student can share their discount code with friends"
    subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence."
    btn1={"I have a code"} btn2={"Learn How"}/> 
    </div>
  )
}

export default Newsletter