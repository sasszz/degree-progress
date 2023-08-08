import React from "react";

enum CourseStatus {
  Completed = "✅ Completed",
  InProgress = "🔄 In Progress",
  Scheduled = "📅 Scheduled",
  NotYetScheduled = "⏸️ Not Yet Scheduled",
}

interface Course {
  course_code: string;
  course_name: string;
  credits: number;
  description: string;
  prerequisites: string;
  offered: string;
  transfer_credit: string;
  status: CourseStatus;
}

const statusColors: Record<CourseStatus, string> = {
  [CourseStatus.Completed]: "bg-[#4B0082]",
  [CourseStatus.InProgress]: "bg-[#9370DB]",
  [CourseStatus.Scheduled]: "bg-[#E6E6FA]",
  [CourseStatus.NotYetScheduled]: "bg-[#F2F2F2]",
};


interface SingleCourseProps {
  courses: Course[];
  title: string;
}

const SingleCourse: React.FC<SingleCourseProps> = ({ courses, title }) => {
  // Sort courses based on status order
  const sortedCourses = courses.sort((a, b) => {
    const statusOrder = [
      "✅ Completed",
      "🔄 In Progress",
      "📅 Scheduled",
      "⏸️ Not Yet Scheduled",
    ];
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <div className="overflow-y-scroll max-h-80">
        {sortedCourses.map((course) => (
          <div
            key={course.course_code}
            className={`border p-2 my-2 rounded ${statusColors[course.status]}`}
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
