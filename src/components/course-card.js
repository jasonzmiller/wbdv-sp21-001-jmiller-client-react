import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse}) => {
    const [editing, setEditing] = useState(false)

    return (
    <div className="col-4">
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some description</p>
                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            </div>
        </div>
    </div>
    )
}

export default CourseCard