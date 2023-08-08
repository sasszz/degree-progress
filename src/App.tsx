import "./App.css";
import Chart from "./app/components/chart/index";
import CourseList from "./app/components/course-list/index";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center px-28 bg-[#000000]">
      <Chart />
      <CourseList />
    </div>
  );
}

export default App;
