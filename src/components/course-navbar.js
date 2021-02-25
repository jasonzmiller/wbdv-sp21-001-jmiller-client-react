import React, {useState} from 'react';
import './course-styling.css'

export default class CourseNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.titleChanged = this.titleChanged.bind(this)
        this.addSpecifiedCourse = this.addSpecifiedCourse.bind(this)
        this.state = {course: {title: ''}}
    }

    titleChanged(event) {
        this.setState({course: {title: event.target.value}})
    }

    render() {
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
                            onChange={this.titleChanged}
                            value={this.state.course.title}
                        />
                    </div>

                    <div className="col-1">
                        <i onClick={() => this.props.addCourse()}
                           className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}

// const CourseNavbar = ({
//                           addCourse,
//                           addSpecifiedCourse,
//                           courses}
// ) => {
// return (
//     <div className="webb-sticky-top">
//         <div className="row">
//
//             <div className="col-1">
//                 <i className="fa fa-bars fa-2x webb-color-lightskyblue"></i>
//             </div>
//
//             <div className="col-2 d-none d-lg-block">
//                 <span className="webb-whitespace-nowrap">
//                     <h5>Course Manager</h5>
//                 </span>
//             </div>
//
//             <div className="col-8">
//                 <input
//                     className="form-control"
//                 />
//             </div>
//
//             <div className="col-1">
//                 <i onClick={() => addCourse()}
//                    className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
//             </div>
//         </div>
//     </div>
// )
// }
//
// export default CourseNavbar

// const [editing, setEditing] = useState(false)
// const [newTitle, setNewTitle] = useState(courses.course.title)
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
//
// return (
//     <div className="webb-sticky-top">
//         <div className="row">
//
//             <div className="col-1">
//                 <i className="fa fa-bars fa-2x webb-color-lightskyblue"></i>
//             </div>
//
//             <div className="col-2 d-none d-lg-block">
//                 <span className="webb-whitespace-nowrap">
//                     <h5>Course Manager</h5>
//                 </span>
//             </div>
//
//             <div className="col-8">
//                 <input
//                     className="form-control"
//                     value={newTitle}
//                     onChange={(event) => setNewTitle(event.target.value)}
//                 />
//             </div>
//
//             <div className="col-1">
//                 {
//                     newTitle.value().length != 0 &&
//                     <i onClick={() => saveTitle(newTitle)}
//                        className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
//                 }
//                 {
//                     newTitle.value().length == 0 &&
//                     <i onClick={() => addCourse()}
//                        className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
//                 }
//                 {/*<i onClick={() => addCourse()}*/}
//                 {/*   className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>*/}
//             </div>
//         </div>
//     </div>
// )