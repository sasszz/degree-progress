import "./App.css";
// import Cat from "./assets/cat.png";
import Chart from "./app/components/chart/index";
import CourseList from "./app/components/course-list/index";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-28">
      <Chart />
      <CourseList />
    </div>
  );
}

export default App;
