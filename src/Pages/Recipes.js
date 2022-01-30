import PreveiosSearches from "../components/PreveiosSearches";
import RecipCard from "../components/RecipCard";

export default function Recipes(){
    const recipes = [
        {
            title:"Bunny earse cactus",
            img:"/img/img_1.jpg",
            authorImg:"/img/human/img_1.jpg",
        },
        {
            title:"chin cuctus",
            img:"/img/img_2.jpg",
            authorImg:"/img/human/img_2.jpg",
        },
        {
            title:"saguro cactus",
            img:"/img/img_3.jpg",
            authorImg:"/img/human/img_3.jpg",
        },
        {
            title:"old lady cactus",
            img:"/img/img_4.jpg",
            authorImg:"/img/human/img_4.jpg",
        },
        {
            title:"star cuctus",
            img:"/img/img_5.jpg",
            authorImg:"/img/human/img_5.jpg",
        },
        {
            title:"6",
            img:"/img/img_6.jpg",
            authorImg:"/img/human/img_6.jpg",
        },
        {
            title:"Christmas cactus",
            img:"/img/img_7.jpg",
            authorImg:"/img/human/img_7.jpg",
        },
        
    ].sort(() =>Math.random() -0.5)
    return(
        <div>
          <PreveiosSearches />
          <div className="recipes-container">
          
                {/* <RecipCard /> */}
                {recipes.map((recipe,index) =>(
                    <RecipCard key={index} recipe={recipe} />
                ))}
             
            </div>
        </div>
    )
}