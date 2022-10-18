import React, { useState } from "react";
import Course from "./Course";

const AllCourses = () => {

    const [courses, setCourses] = useState([
        {key: "1", title:"Java Course", description: "this is Java course for beginners"},
        {key: "2", title:"Django Course", description: "this is Django course for beginners"},
        {key: "3", title:"React Course", description: "this is React course for beginners"},
        {key: "4", title:"Javascript Course", description: "this is Javascript course for beginners"}
    ]
    );

    return(
        <div>
                <h1>All Courses</h1>
                <p>List of Courses are here : </p>
                {  /**using ternary operator */
                    courses.length > 0
                    ? courses.map((item) => <Course course={item} />)
                    : "No course found"
                }
        </div>
    );
};

export default AllCourses;