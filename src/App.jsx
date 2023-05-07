import "./App.css";
import Header from "./components/Header/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./components/homepage/HomePage";
import LogIn from "./components/login/LogIn";
import { AuthContext, AuthContextProvider } from "./context/Auth";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Error from "./components/error/Error";

function App() {
  return (
    <AuthContextProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<HomePage />} path="/" exact />
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthContextProvider>

    // <>
    // <LogIn/>
    //   {/* <Header/>
    //   <HomePage/> */}
    // </>
  );
}

export default App;
