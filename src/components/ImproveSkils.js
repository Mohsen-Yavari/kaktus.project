export default function ImproveSkils(){
    const list = [
        "Lorem, ipsum kaktus",
        "Lorem, ipsum kaktus",
        "Lorem, ipsum kaktus",
        "Lorem, ipsum kaktus",
        "Lorem, ipsum kaktus",
        "Lorem, ipsum kaktus"
    ]
    //second section and sign up tag
    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/img_10.jpg" alt="" />
            </div> 
        <div className="col typograpy">
            <h1 className="title">
                Do you like kaktus?&#128525;
            </h1>
           {list.map((item, index) =>(
            <p className="skill-item" key={index}>{item}</p>
        ))}
            <button className="btn">Sign Up</button>
        </div> 
        
     </div>
    )
}