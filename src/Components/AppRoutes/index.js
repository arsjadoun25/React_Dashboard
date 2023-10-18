import Customer from "../../Pages/Customer";
import Dashboard from "../../Pages/Dashboard";
import Help from "../../Pages/Help";
import Income from "../../Pages/Income";
import Product from "../../Pages/Product";
import Promote from "../../Pages/Promote";
import { Route, Routes } from "react-router-dom";

function AppRoutes(){
    return (
       
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/customer" element={<Customer />}></Route>
                <Route path="/income" element={<Income />}></Route>
                <Route path="/promote" element={<Promote />}></Route>
                <Route path="/help" element={<Help />}></Route>
            </Routes>
    )
}
export default AppRoutes;
