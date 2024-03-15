import { useEffect, useState } from "react"
import Card from "./card/Card"


const CourseCard = ({hendelSingledata}) => {
    const [courseData, setCourseData] = useState([])

    useEffect(() => {
      fetch("../../../public/data.json")
      .then(res => res.json())
      .then(data => setCourseData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {courseData.map(item => <Card key={item.id} CourseCard = {item} hendelSingledata={hendelSingledata}/>)   }
        </div>
    )
}

export default CourseCard