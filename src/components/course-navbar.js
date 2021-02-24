import React, {useState} from 'react';
import './course-styling.css'

const CourseNavbar = ({addCourse, addSpecifiedCourse, course, lastModified, owner}) => {
    // const [editing, setEditing] = useState(false)
    // const [newTitle, setNewTitle] = useState(course.title)
    //
    // const saveTitle = (newTitle) => {
    //     setEditing(false)
    //     const newCourse = {
    //         title: newTitle,
    //         owner: "me",
    //         lastModified: "never"
    //     }
    //     addSpecifiedCourse(newCourse)
    // }

    return (
    <div className="webb-sticky-top">
        <div className="row">

            <div className="col-1">
                <i className="fa fa-bars fa-2x webb-color-lightskyblue"></i>
            </div>

            <div className="col-2 d-none d-lg-block">
                <span className="webb-whitespace-nowrap">
                    <h5>Course Manager</h5>
                </span>
            </div>

            <div className="col-8">
                <input
                    className="form-control"
                    // value={newTitle}
                    // onChange={(event) => setNewTitle(event.target.value)}
                />
            </div>

            <div className="col-1">
                {/*{*/}
                {/*    newTitle.value().length != 0 &&*/}
                {/*    <i onClick={() => saveTitle(newTitle)}*/}
                {/*       className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    newTitle.value().length == 0 &&*/}
                {/*    <i onClick={() => addCourse()}*/}
                {/*       className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>*/}
                {/*}*/}
                <i onClick={() => addCourse()}
                   className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
            </div>
        </div>
    </div>
    )
}

export default CourseNavbar