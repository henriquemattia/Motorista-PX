import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import UserBalance from "./contexts/UserBalance";

import { AddingBalance } from "./pages/AddingBalance/AddingBalance";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { PixApproved } from "./pages/PixApproved/PixApproved";
import { QRcodeGenerated } from "./pages/QRcodeGenerated/QRcodeGenerated";

export default function AppRouter() {

    const [balance, setBalance] = useState<number>(35500.00)

    return (
        <UserBalance.Provider value={{ balance, setBalance }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/balance" element={<AddingBalance />} />
                    <Route path="/qrcode" element={<QRcodeGenerated />} />
                    <Route path="/pix" element={<PixApproved />} />
                </Routes>
            </BrowserRouter>
        </UserBalance.Provider>
    )
}