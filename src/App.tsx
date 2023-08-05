import "./App.css";
// import Cat from "./assets/cat.png";
import Chart from "./app/components/chart/index";
import CourseList from "./app/components/course-list/index";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div style={{ width: "600px", height: "600px" }}>
        <Chart />
      </div>{" "}
      <CourseList />
    </div>
  );
}

export default App;
