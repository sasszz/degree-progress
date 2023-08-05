// import data from "../../utils/class-data/data.json";
import React from "react";

interface Course {
  course_code: string;
  course_name: string;
  credits: number;
  description: string;
  prerequisites: string;
  offered: string;
  transfer_credit: string;
  status: "Completed" | "In Progress" | "Scheduled" | "Not Scheduled";
}

const statusColors: Record<Course["status"], string> = {
  Completed: "bg-[#5551FF]",
  "In Progress": "bg-[#8A8AFF]",
  Scheduled: "bg-[#C9C9FF]",
  "Not Scheduled": "bg-[#F2F2F2]",
};

interface SingleCourseProps {
  courses: Course[];
  title: string;
}

const SingleCourse: React.FC<SingleCourseProps> = ({ courses, title }) => {
  // Sort courses based on status order
  const sortedCourses = courses.sort((a, b) => {
    const statusOrder = [
      "Completed",
      "In Progress",
      "Scheduled",
      "Not Scheduled",
    ];
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="overflow-y-scroll max-h-80">
        {sortedCourses.map((course) => (
          <div
            key={course.course_code}
            className={`border p-2 my-2 rounded ${statusColors[course.status]}`}
          >
            <h3 className="text-lg font-semibold">{course.course_name}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-gray-800 mt-1">
              Credits: {course.credits} | Prerequisites: {course.prerequisites}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourse;
