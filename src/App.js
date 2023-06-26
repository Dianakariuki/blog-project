
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
