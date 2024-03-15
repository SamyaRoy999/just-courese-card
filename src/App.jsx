import './App.css'
import CourseCard from './components/courseCard/CourseCard'
import Details from './components/courseDetails/Details'
import data from "../public/data.json"
export default function App() {
  console.log(data);
  return (
    <div className='mx-auto container'>
      <h1 className='text-4xl font-bold text-center p-5'>Course Registration</h1>
      <div className=' grid grid-cols-12 gap-4'>
        <div className='col-span-9'>
          <CourseCard />
        </div>
        <div className='col-span-3'>
          <Details />
        </div>
      </div>
    </div>
  )
}