import { useNavigate } from 'react-router-dom'
import qrCode from "../../assets/image1.svg"
import copySvg from "../../assets/icon-park-outline_copy.svg"

import './QRcodeGenerated.css'

export function QRcodeGenerated() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="textTop">
                <p className="textTop-1">QRCode</p>
                <h2 className="textTop-2">QRCode Gerado!</h2>
            </div>

            <div className="container-center">

                <div className="qrCode-area">
                    <img src={qrCode} alt="" />

                    <div className="copy-area">

                        <div className="textGray">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique potenti bibendum Lorem ipsum dolor</p>
                        </div>

                        <div className="duplicateIcon">
                            <img src={copySvg} alt="icone de cópia" />
                        </div>
                    </div>
                </div>

            </div>

            <button onClick={() => navigate("/pix")} className="button-close">Fechar</button>
        </div>

    )
}