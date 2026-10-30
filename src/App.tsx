
import FloatingCard from "./components/FloatingCard";
import "./App.css";

function App() {
  return (
    <main className="main-container">
      <div className="background-glow"></div>

      <div className="scene">
        <FloatingCard />
      </div>

      <div className="mouse-hint">
        MOVE YOUR MOUSE TO INTERACT
      </div>
    </main>
  );
}

export default App;
