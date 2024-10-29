import { useLoaderData } from "react-router-dom";
import FoodCart from "../FoodCart/FoodCart";

const MainContent = () => {
    const meals = useLoaderData()
    console.log(meals)
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <h1 className="text-3xl font-bold">Product Name</h1>
            </div>
            
            <div className="col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        meals.categories.map(meal=><FoodCart key={meal.idCategory} meal={meal}></FoodCart>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default MainContent;