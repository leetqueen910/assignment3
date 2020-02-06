import React from "react"
import CourserRow from "./CourseRow";

const CourseTableComponent = ({courses,deleteCourse, showEditor}) =>
    <div>
        <h2>Course Table Component {courses.length}</h2>
        <ul>

            {
                courses.map(function(course, index){
                    return (
                        <CourserRow
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}/>
                    )
                })
            }
        </ul>
    </div>


export default CourseTableComponent