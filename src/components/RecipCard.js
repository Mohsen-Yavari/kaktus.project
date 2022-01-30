import CustomImage from "./CustomImage"

export default function RecipCard ({recipe}){
    return(
        <div className="recip-card">
            <CustomImage imgSrc={recipe.img} pt={"65%"} />
            <div className="recip-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="" />
                <p className="recie-title">B{recipe.title}</p>
                <p className="recie-desk">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, distinctio
                </p>
                <a href="#" className="vew-btn">VIEW</a>
            </div>
        </div>
    )
}