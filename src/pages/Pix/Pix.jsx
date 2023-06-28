import Header from "../../components/Header/Header";
import QRCode from 'qrcode.react';
import "./Pix.css";
import { BsQrCode } from "react-icons/bs"; 

function Pix() {

  return (
    <div>
      <Header />
      <div className="tudoPix">
        <h1 className="titleConfirmPay">confirmar pagamento</h1>
        <BsQrCode className="imgQRCode"/>
        <button className="btnCopyPix">copiar pix</button>
      <div className="divAdressProduct">
        <h1 className="titleAdress">endereço:</h1>
        <h1 className="titleProducts">produtos:</h1>
      </div>
      </div>
    </div>
  );
}

export default Pix;
