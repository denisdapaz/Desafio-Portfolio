import {AiFiliPhone, AiOutlineMail,AiFillEnvironment} from "react-icons/ai"

import "../styles/components/informationcontainer.sass";



const InformationContainer = () => {
    return ( <section id="information">
        <div className="info-card">
            <AiFiliPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(13) 66666-6666</p>
            </div>
        </div>
    </section>
    );
}

export default InformationContainer;