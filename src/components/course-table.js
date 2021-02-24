import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="webb-dashtable-title">Title</th>
                        <th className="webb-dashtable-ownedby d-none d-sm-table-cell">Owned by</th>
                        <th className="webb-dashtable-lastmodified d-none d-md-table-cell">Last modified by me</th>
                        <th className="webb-dashtable-trash">
                            <i className="fas fa-folder"></i>
                            <i className="fas fa-sort-alpha-up-alt"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-th webb-color-blue"></i>
                            </Link></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}