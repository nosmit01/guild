import Chat from './Modules/Chat/Index'
import Login from './Modules/Login/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
