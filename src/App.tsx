import "./App.css";
import Chart from "./app/components/chart/index";
import CourseList from "./app/components/course-list/index";

function App(this: any) {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-28 bg-[#000000]">
      <div className="flex flex-col md:flex-row">
        <Chart className="md:mr-4" />
        <CourseList className="md:ml-4" />
      </div>
    </div>
  );
}

export default App;
