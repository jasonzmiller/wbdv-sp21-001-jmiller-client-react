import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, title, deleteCourse, updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
    <div className="col-3">
        <div className="card" style={{width: "18rem"}}>
            <span className="webb-pull-top-right webb-whitespace-nowrap">
                {
                    editing &&
                    <i onClick={() => deleteCourse(course)} className="fas fa-times fa-2x webb-color-red"></i>
                }
            </span>
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Card image cap"></img>
            <div className="card-body">
                {
                    !editing &&
                    <Link to="/courses/editor">
                        <h5 className="card-title">{course.title}</h5>
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           value={newTitle}
                           onChange={(event) => setNewTitle(event.target.value)}/>
                }
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <span className="webb-pull-bottom-right webb-whitespace-nowrap">
                    {
                        editing &&
                        <i onClick={() => saveTitle()} className="fas fa-check webb-color-green webb-pull-bottom-right"></i>
                    }
                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit webb-color-blue webb-pull-bottom-right"></i>
                    }
                </span>
            </div>
        </div>
    </div>
    )
}

export default CourseCard