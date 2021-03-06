import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Context/Context";
import PercentageContext from "../Context/PercentageContext";

import Login from '../Pages/LoginPage';
import Register from '../Pages/RegisterPage';
import Habits from "../Pages/HabitsPage";
import Header from './Header';
import Today from "../Pages/TodayPage";
import Footer from "./Footer";
import Historic from "../Pages/HistoricPage";

function App() {
    const [login, setLogin] = useState({})
    const [percentage, setPercentage] = useState(0)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{login, setLogin}}>
                <PercentageContext.Provider value={{percentage, setPercentage}}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="cadastro" element={<Register />} />
                        <Route path="habitos" element={<Habits />} />
                        <Route path="hoje" element={<Today />} />
                        <Route path="historico" element={<Historic />} />
                    </Routes>
                    
                        <Footer />
                </PercentageContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;