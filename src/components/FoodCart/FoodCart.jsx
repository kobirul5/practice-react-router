import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const FoodCart = ({meal}) => {
    const {strCategory, strCategoryDescription,strCategoryThumb	} =  meal
    const navigate = useNavigate()
    const handleViewDetails = ()=> {
        navigate("/details")
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={strCategoryThumb}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{strCategory}</h2>
                    <p className="overflow-hidden h-12">{strCategoryDescription}</p>
                    <div className="card-actions">
                        
                        <button onClick={handleViewDetails} className="btn btn-primary">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCart.propTypes = {
    meal: PropTypes.object
}
export default FoodCart;