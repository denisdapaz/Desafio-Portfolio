import { FaLinkedinIn, FaGithub } from "react-icons/fa";


import "../styles/components/socialnetwork.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },

];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href="#" className="social-btn" id={network.name} key={network.nome}>{network.icon}</a>
        ))}
    </section>;
};

export default SocialNetworks;
