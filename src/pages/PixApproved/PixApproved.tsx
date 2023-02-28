import closeButton from "../../assets/icon-park-outline_close-small.svg"
import signUpOkay from "../../assets/sign-up-okay 1.svg"
import { useNavigate } from 'react-router-dom'

import './PixApproved.css'

export function PixApproved() {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate("/")} className="closeButton">
                <img src={closeButton} alt="Ícone de fechamento" />
            </div>
            
            <div className="avatar">
                <img src={signUpOkay} alt="" />
                <p className="textPix" >O PIX foi pago com sucesso!</p>
            </div>
        </>
    )
}