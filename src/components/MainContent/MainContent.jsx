import { useLoaderData } from "react-router-dom";
import FoodCart from "../FoodCart/FoodCart";
import FoodName from "../FoodName/FoodName";

const MainContent = () => {
    const meals = useLoaderData()
    console.log(meals)
    return (
        <div className="grid grid-cols-12 gap-5 my-10">
            <div className="col-span-3 card shadow-xl rounded-3xl">
                <div className="bg-green-400 p-4 mb-4 rounded-2xl">

                <h1 className="text-3xl font-bold text-center">Food Name</h1>
                </div>
                <div className="flex flex-col gap-4 mx-4">
                    {
                        meals.categories.map(meal=><FoodName key={meal.idCategory} meal={meal}></FoodName>)
                    }
                </div>
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