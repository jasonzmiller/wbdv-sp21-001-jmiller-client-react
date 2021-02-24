import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
        owner,
        lastModified
    }) => {
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
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        <i className="fa fa-file webb"></i>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           value={newTitle}
                           onChange={(event) => setNewTitle(event.target.value)}/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit webb-color-blue"></i>}
                {!editing && <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>}
                {editing  && <i onClick={() => saveTitle()} className="fas fa-check webb-color-green"></i>}
                {editing  && <i onClick={() => setEditing(false)} className="fas fa-times webb-color-red"></i>}
            </td>
        </tr>
        )
    }

export default CourseRow