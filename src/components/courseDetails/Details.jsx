import Title from "./title/Title";



const Details = ({ single }) => {
    console.log(single);
    return (
        <div>
            <div>
                {single.map(item => <Title single={item}/>)}
            </div>
        </div>
    )
}

export default Details