import qrCode from "../../assets/image1.svg"
import copySvg from "../../assets/icon-park-outline_copy.svg"
import './QRcodeGenerated.css'

export function QRcodeGenerated() {
    return (
        <>
            <div className="textTop">
                <p>QRCode</p>
                <h2>QRCode Gerado!</h2>
            </div>
            <div className="qrCode">
                <img src={qrCode} alt="" />

                <div className="box">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum dolorem? Assumenda amet </p>
                    </div>

                    <div className="duplicateIcon">
                        <img src={copySvg} alt="icone de cópia" />
                    </div>
                </div>
            </div>

            <button>Fechar</button>
        </>

    )
}