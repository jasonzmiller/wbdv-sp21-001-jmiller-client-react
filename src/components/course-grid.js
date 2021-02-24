import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <div className="row">
            <div className="col-12 text-right">
                <i className="fas fa-folder"></i>
                <i className="fas fa-sort-alpha-up-alt"></i>
                <Link to="/courses/table">
                    <i className="fas fa-th webb-color-blue"></i>
                </Link>
            </div>
        </div>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard key={ndx}
                                course={course}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}/>
                )
            }
        </div>
    </div>


export default CourseGrid