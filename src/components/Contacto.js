import react from 'react';
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

function Contacto() {
    return(
        <div className='contact'>
            <a href="https://www.linkedin.com/in/agustina-fatima-appes/" target='blanck'><img src={Linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/AgusAppes" target='blanck'><img src={Github} alt="Github" /></a>
        </div>
    )
}
export default Contacto;