import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataTables from "./components/DataTables"
import Layout from "./components/Layout"
import Home from "./pages/home"
import PostDetail from "./pages/PostDetail"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />}></Route>
          <Route  path="/posts/:id" element={<PostDetail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
