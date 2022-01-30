import CustomImage from "./CustomImage";


export default function HeroSection(){

const images = [
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_5.jpg",
    "/img/img_6.jpg",
    "/img/img_7.jpg",
    "/img/img_8.jpg",
    "/img/img_9.jpg"
    
    
    
]

    return(
        <div className="section hero">
            <div className="col typograpy">
                <h1 className="title">
                    About Us For kaktus
                </h1>
                <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae doloribus quas animi?
                </p>
                <button className="btn">Explor Now</button>
            </div> 
            <div className="col gallary">
                { images.map((src,index) => (
                      <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
              
           
            </div> 
         </div>

    )
}  