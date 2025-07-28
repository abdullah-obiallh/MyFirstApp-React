import "./MyAppStyle.css";
import Header from "./Header";
import Post from "./Post";
import SideMeneu from "./SideMeneu";
function App() {
  return (
    <div className="App">
      <Header />
      {/* Contianer Post+sideMenu */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: "70%",
          }}
        >
          {/* Post */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* Post */}
          {/* SideMeneu */}
          <div style={{ width: "30%" }}>
            <SideMeneu />
          </div>
          {/* SideMeneu */}
        </div>
      </div>
    </div>
  );
}

export default App;
