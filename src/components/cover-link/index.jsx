import { Link } from "react-router-dom";

const CoverLink = ({ height, bgImage, title, link }) => {
    return (
        <div
            style={{
                height: height,
                backgroundImage: `url(${bgImage})`
            }}
            className={`w-[541px] bg-[url(${bgImage})] border`}>
            {title}
            <div className="text-white text-[32px]">
                <Link to={link}>VIEW PROJECTS</Link>
            </div>
        </div>
    )
}

export default CoverLink;