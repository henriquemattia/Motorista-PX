import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
import { AddingBalance } from "./pages/AddingBalance/AddingBalance";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { PixApproved } from "./pages/PixApproved/PixApproved";
import { QRcodeGenerated } from "./pages/QRcodeGenerated/QRcodeGenerated";

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/balance" element={<AddingBalance />}/>
                <Route path="/qrcode" element={<QRcodeGenerated />}/>
                <Route path="/pixapproved" element={<PixApproved />}/>
            </Routes>
        </BrowserRouter>
    )
}