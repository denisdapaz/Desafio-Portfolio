import "../styles/components/sidebar.sass";

import Denis from '../img/eu.jpg';

import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./ImformationContainer";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Denis} alt="Denis da Paz" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer/>
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
}

export default Sidebar;