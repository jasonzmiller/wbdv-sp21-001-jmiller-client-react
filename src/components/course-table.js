import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)

    }

    render() {
        console.log(this.props)
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="webb-dashtable-title">Title</th>
                        <th className="webb-dashtable-ownedby d-none d-md-table-cell">Owned by</th>
                        <th className="webb-dashtable-lastmodified d-none d-lg-table-cell">Last modified by me</th>
                        <th className="webb-dashtable-trash">
                            <span className="webb-whitespace-nowrap">
                                <i className="fas fa-folder webb-margin"></i>
                                <i className="fas fa-sort-alpha-up-alt webb-margin"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th webb-color-blue webb-margin"></i>
                                </Link>
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        console.log(this.props)
                        // this.props.courses.map((course, ndx) =>
                        //     <CourseRow
                        //         updateCourse={this.props.updateCourse}
                        //         deleteCourse={this.props.deleteCourse}
                        //         key={ndx}
                        //         course={course}
                        //     />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}