import EnginuerCard from "./EnginuerCard";


export default function EngineerSection(){

   const enginers =[
       {
           name:"Mohsen Yavari",
           img:"/img/human/img_1.jpg",
           resipeCount:"10",
           work:"hard",
       },
       {
           name:"Ali Yavari",
           img:"/img/human/img_2.jpg",
           resipeCount:"8",
           work:"middel",
       },
       {
           name:"reza Yavari",
           img:"/img/human/img_3.jpg",
           resipeCount:"9",
           work:"hard",
       },
       {
           name:"Masoud Yavari",
           img:"/img/human/img_4.jpg",
           resipeCount:"10",
           work:"hard",
       },
       {
           name:"Jamal Yavari",
           img:"/img/human/img_5.jpg",
           resipeCount:"10",
           work:"hard",
       },
       {
           name:"Tagi Yavari",
           img:"/img/human/img_6.jpg",
           resipeCount:"7",
           work:"--",
       }
   ]     

    return(
        <div className=" section enginer">
            <h1 className="title">
                Our Top Enginee
            </h1>
            <div className="top-enginer-container">
               {/* <EnginuerCard />
               <EnginuerCard />
               <EnginuerCard />
               <EnginuerCard />
               <EnginuerCard /> */}

               { enginers.map(enginer => <EnginuerCard key={enginer.name} enginer={enginer} />)}
            </div>
        </div>
    )
}