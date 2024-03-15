import { CiDollar } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Card = ({CourseCard ,hendelSingledata}) => {
    const { title, img, price, description, credit } = CourseCard;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between py-3">
                        <div className="flex items-center gap-2">
                            <CiDollar />
                            <p>Price : {price}</p>
                        </div>
                        <div className="flex items-center gap-2"> 
                            <CiBookmark />
                            <p>credit : {credit}</p>
                        </div>
                    </div>
                    <div className="card-actions w-full">
                        <button className="btn w-full btn-primary" onClick={()=> hendelSingledata(CourseCard)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card