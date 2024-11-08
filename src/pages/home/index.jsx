import Navbar from "../../components/navbar"
import bgImg from '../../assets/images/main-bg.png'
import { Link } from "react-router-dom"
import CoverLink from "../../components/cover-link"

const Home = () => {
    return (
        <>
            <div className={`bg-[url("/src/assets/images/main-bg.png")] py-[145px] px-[95px] bg-cover rounded-xl`}>
                <h1 className="w-[540px] text-5xl font-medium leading-[48px] text-left text-[#fff]">
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className="w-[445px] text-base font-normal leading-[26px] text-left mt-6 text-[#fff]">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <div className="mt-10">
                    <Link className="px-6 py-4 bg-white rounded-lg mt-10" to='/learn-more'>Learn More</Link>
                </div>
            </div>
            <CoverLink
                height={630}
                bgImage={"/src/assets/images/bitmap.png"}
                title={"Web design"}
                link={'/web-design'}
            />
            <CoverLink
                height={308}
                bgImage={"/src/assets/images/Bitmap-2.png"}
                title='APP DESIGN'
                link={'/app-design'}
            />
        </>
    )
}

export default Home