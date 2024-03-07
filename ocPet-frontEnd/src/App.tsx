import Home from "@components/features/Home/Home";
import "./App.css";
import Test from "@components/features/Test/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 웹 서비스 소개 페이지 */}
          <Route path="/" element={<Test />} />
          {/*Home */}
          <Route path="/Home" element={<Home />} />
          {/* <SignIn /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <LogIn /> */}
          {/* <Route path="/login" element={<LogIn />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
