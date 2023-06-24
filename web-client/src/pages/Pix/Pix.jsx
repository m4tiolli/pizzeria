import Header from "../../components/Header/Header";
import "./Pix.css";

function Pix() {
  return (
    <div>
      <Header />
      <div className="tudoPix"></div>
        <h1 className="titleConfirmPay">confirm payment</h1>
        <button className="btnCopyPix">copy pix code</button>
        <h1 className="titleAdress">adress</h1>
        <h1 className="titleProducts">products</h1>
    </div>
  );
}

export default Pix;
