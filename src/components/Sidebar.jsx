import SocialNetworks from "./SocialNetworks";

import Denis from '../img/eu.jpg';

import "../styles/components/sidebar.sass";



const Sidebar = () => {
    return ( 
      <aside id="sidebar">
        <img src={Denis} alt="Denis da Paz" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks  />
        <p>informações de contato</p>
        <a href="" className="btn">
            Download Currículo
        </a>
      </aside>
    );
}

export default Sidebar