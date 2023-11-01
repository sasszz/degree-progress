import ElectiveClassList from "../single-course/elective"; // Update the path accordingly
import RequiredClassList from "../single-course/required"; // Update the path accordingly
import electivecoursedata from "../../utils/class-data/elective.json";
import requiredcoursedata from "../../utils/class-data/required.json";
import { ElectiveCourse } from "../single-course/elective";
import { RequiredCourse } from "../single-course/required";

interface CourseListProps {
  className?: string;
}

export default function CourseList({ className }: CourseListProps) {
  const requiredCourses: RequiredCourse[] = requiredcoursedata;
  const programElectives: ElectiveCourse[] = electivecoursedata;

  return (
    <div className={`${className}`}>
      <div className="bg-[#4B0082] rounded">
        <RequiredClassList courses={requiredCourses} title="Required Courses" />
      </div>
      <div className="bg-[#5551FF] rounded mt-4">
        <ElectiveClassList
          courses={programElectives}
          title="Program Electives"
        />
      </div>
    </div>
  );
}
