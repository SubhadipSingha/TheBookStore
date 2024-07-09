import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Contact Us</h3>
            <p>
              <a href="mailtosubhadipsingha05@gmail.com">subhadipsingha05@gmail.com</a>
            </p>
            <p>6294080228</p>
          </div>
          <div className="col">
            <h3>Social Media</h3>
            <ul>
            
              <li>
                <a href="https://www.instagram.com/reelsinha?igsh=eW0xcXdhYXg4emV5">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
             
            </ul>
          </div>
          <div className="col">
            <h3>Copyright</h3>
            <p>&copy; {new Date().getFullYear()} Your Bookstore</p>
            <p> Name: Subhadip singha ID: 211001001068</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
