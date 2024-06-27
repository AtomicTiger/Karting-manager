import "./footer.css"
import linkdin from './linkdin.png'
import github from './github.png'
function Footer() {
    return (
        <div className="Footer">
            <h3>Author: Piotr Kwaśniowski</h3>
            <a className="LinkAdd" href="https://github.com/AtomicTiger"><img src={linkdin} alt="linkdin"/></a>
            <a className="LinkAdd" href="https://www.linkedin.com/in/piotr-kwa%C5%9Bniwoski-074b1527b/"><img src={github} alt="github"/></a>
        </div>
    );
  }
  
export default Footer;