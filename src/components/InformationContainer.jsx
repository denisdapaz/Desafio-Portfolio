

import {AifIllPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../styles/components/informationContainer.sass"


const InformationContainer = () => {
    return  <section id="information">
    <div className="infor-card">
        <AifIllPhone id="phone-icon" /> 
        <div>
            <h3>Telefone</h3>
            <p>(58)13131313-1313</p>
        </div>
    </div>
    <div className="infor-card">
        <AiOutlineMail id="email-icon" /> 
        <div>
            <h3>E-mail</h3>
            <p>dns.oliveiradapaz@gmail.com</p>
        </div>
    </div>
    <div className="infor-card">
        <AiFillEnvironment id="pin-icon" /> 
        <div>
            <h3>Localização</h3>
            <p>Itanhaém / SP</p>
        </div>
    </div>
</section>

};

export default InformationContainer