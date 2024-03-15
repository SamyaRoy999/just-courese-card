import { useState } from 'react'
import './App.css'
import CourseCard from './components/courseCard/CourseCard'
import Details from './components/courseDetails/Details'

export default function App() {

  const [single, setSingle] = useState([])
  const hendelSingledata = (data) => {
    const courseData = [...single, data]
    setSingle(courseData)
  }
 console.log(single);
  return (
    <div className='mx-auto container'>
      <h1 className='text-4xl font-bold text-center p-5'>Course Registration</h1>
      <div className=' grid grid-cols-12 gap-4'>
        <div className='col-span-9'>
          <CourseCard hendelSingledata={hendelSingledata} />
        </div>
        <div className='col-span-3'>
          <div className=" border border-cyan-600">
            <h3 className="text-lg text-cyan-600 m-2">credit houre render {single.length} credit</h3>
          </div>
           <Details single={single} />
        </div>
      </div>
    </div>
  )
}