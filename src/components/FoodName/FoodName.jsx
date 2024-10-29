import PropTypes from "prop-types";
const FoodName = ({meal}) => {
    return (
        <div>
            <h2 className="text-3xl">{meal.idCategory}.{meal.strCategory}</h2>
        </div>
    );
};
FoodName.propTypes = {
    meal: PropTypes.object
}
export default FoodName;