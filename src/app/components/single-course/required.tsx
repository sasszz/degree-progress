import React from "react";

export interface RequiredCourse {
  course_code: string;
  course_name: string;
  credits: number;
  description: string;
  prerequisites: string;
  status: string; // Use string for status
}

const statusColors: Record<string, string> = {
  Completed: "bg-[#4B0082]",
  "In Progress": "bg-[#9370DB]",
  Scheduled: "bg-[#E6E6FA]",
  "Not Yet Scheduled": "bg-[#F2F2F2]",
};

const statusTextColors: Record<string, string> = {
  Completed: "text-white",
  "In Progress": "text-black",
  Scheduled: "text-black",
  "Not Yet Scheduled": "text-black",
};

interface SingleCourseProps {
  courses: RequiredCourse[];
  title: string;
}

const statusOrder = [
  "Completed",
  "In Progress",
  "Scheduled",
  "Not Yet Scheduled",
];

const SingleCourse: React.FC<SingleCourseProps> = ({ courses, title }) => {
  // Sort courses based on status order
  const sortedCourses = courses.sort(
    (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <div className="overflow-y-scroll max-h-80">
        {sortedCourses.map((course) => (
          <div
            key={course.course_code}
            className={`border p-2 my-2 rounded 
            ${statusColors[course.status]} ${statusTextColors[course.status]}`}
          >
            <h3 className="text-lg font-semibold">{course.course_code}</h3>
            <h3 className="text-lg font-semibold">{course.course_name}</h3>
            <p className="mt-1">Status: {course.status}</p>
            <p className="mt-1"> {course.description}</p>
            <p className="mt-4">
              Credits: {course.credits} | Prerequisites: {course.prerequisites}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourse;
