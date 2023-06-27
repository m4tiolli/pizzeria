import Header from "../../components/Header/Header";
import QRCode from 'qrcode.react';
import "./Pix.css";
import { BsQrCode } from "react-icons/bs"; 

function Pix() {

  return (
    <div>
      <Header />
      <div className="tudoPix">
        <h1 className="titleConfirmPay">confirm payment</h1>
        <BsQrCode className="imgQRCode"/>
        <button className="btnCopyPix">copy pix code</button>
      <div className="divAdressProduct">
        <h1 className="titleAdress">adress:</h1>
        <h1 className="titleProducts">products:</h1>
      </div>
      </div>
    </div>
  );
}

export default Pix;
