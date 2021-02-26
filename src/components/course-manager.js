import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import CourseNavbar from "./course-navbar";
import CourseRow from "./course-row";

export default class CourseManager extends React.Component {
    state = {
        courses: [
            {
                title: "New Course",
                owner: "New Owner",
                lastModified: "Never"
            }
        ]
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id ? course : c)
            })))
    }

    findCourseById = (course) => {
        courseService.findCourseById(course._id, course)
            .then(() => console.log(course))
    }


    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course]
                })))
    }

    addSpecifiedCourse = (title) => {
        const newCourse = {
            title: title,
            owner: "me",
            lastModified: "today"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course]
                })
            ))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // this.setState((prevState) => ({
                //     ...prevState,
                //     courses: prevState
                //         .courses
                //         .filter(course => course !== courseToDelete)
                // }))
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== courseToDelete._id)
                }))
            })
    }


    render() {
        {console.log(this.state)}
        return (
            <div>
                <Route path="/courses/editor"
                       render={(props) =>
                           <CourseEditor {...props}/>}>
                </Route>

                <Route path={["/courses/table", "/courses/grid"]}>
                    <CourseNavbar addCourse={this.addCourse}
                                  addSpecifiedCourse={this.addSpecifiedCourse}
                                  courses={this.state.courses}
                    />
                </Route>

                <div className="container webb-padding-20px webb-padding-top-65px">
                    <Route path="/courses/table">
                        <CourseTable
                                    updateCourse={this.updateCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}
                        />
                    </Route>

                    <Route path="/courses/grid">
                        <CourseGrid updateCourse={this.updateCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>
                    </Route>
                </div>

                <Route path="/" exact={true}>
                    <div className="container">
                        <a href="/courses/table">
                            <button type="button" className="btn btn-outline-primary btn-lg btn-block">Table</button>
                        </a>
                        <a href="/courses/grid">
                            <button type="button" className="btn btn-outline-primary btn-lg btn-block">Grid</button>
                        </a>
                    </div>
                </Route>
                <i className="fas fa-3x fa-plus-circle webb-pull-bottom-right-fixed webb-color-red"
                   onClick={() => this.addCourse()}></i>
            </div>
        )
    }
}