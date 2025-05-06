
const Footer=() =>{
  return (
    
    <div className="Footer">
        
        <div className="footer-links">
        <h4 style={{ textAlign: 'center' }}>Links</h4>
          <ul style={{listStyleType: 'none'}}>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="contact">
        <h4 style={{ textAlign: 'center' }}>Contact Us</h4>
            <ul style={{listStyleType:'none' }}>
            <li >Email : contacttheblog@gmail.com</li>
            <br/>
            <li>Contact : +8053744389</li>
            </ul>
        </div>
        <div className="Follow">
        <h4 style={{ textAlign: 'center' }}>Follow Us</h4>
            
            <img src="https://i.pinimg.com/736x/a4/fb/d5/a4fbd531ecb3e89a39c876f1b73e13a9.jpg" alt="Description" style={{height:'20px',width:'20px', marginRight: '10px'}}/>
            <img src="https://i.pinimg.com/474x/c9/13/f6/c913f66407f9cc3869a03e2c30ea6bf0.jpg" alt="Description " style={{height:'20px',width:'20px', marginRight: '10px'}}/>
            <img src="https://i.pinimg.com/474x/85/e0/03/85e003746075dc39ef989324a6e79e02.jpg" alt="Description " style={{height:'20px',width:'20px', marginRight: '10px'}}/>
            <img src="https://i.pinimg.com/736x/7b/7d/30/7b7d300802aa84c69186ba52389a321d.jpg" alt="Description " style={{height:'20px',width:'20px', marginRight: '10px'}}/>

        </div>

    </div>
 
  )
}

export default Footer;
