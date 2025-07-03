import React from 'react'

const Footer = () => {
    return ( <>
        <div className ='Footer'>
            <div className="Footer-top">

            <div className='sb-footer-links'>
       
                <h3>Quick Links!</h3>
                <a href='/About'>
                <p>About</p>
                </a>
                <a href='/Contact'>
                <p>Contact</p>
                </a>
                <a href='/Blog'>
                <p>Blog</p>
                </a>
                <a href='/Features'>
                <p>Features</p>
                </a>

            </div>

            <div className='Sub-Footer'>
                <a href='/Terms'>Terms and Contidions</a>
                <a href='/Privacy'>Privacy</a>
                <a href='/Security'>Security</a>
                <a href='/Cookie'>Cookiesss</a>
            </div>


            <div className='Footer-social-links'>
                <h4>Coming soon On..</h4>
                <div className='SocialMedia'>
                    <p><img src='https://i.pinimg.com/736x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg' alt=''/></p>
                    <p><img src='https://i.pinimg.com/736x/43/dc/c6/43dcc60a525ecd856fa2614cb2cba08e.jpg' alt=''/></p>
                    <p><img src='https://i.pinimg.com/736x/bf/1b/87/bf1b879258576964a04eb25b361e4283.jpg' alt=''/></p>
                    <p><img src='https://i.pinimg.com/736x/63/e6/1a/63e61a8f4a158c31565a57999baae7c4.jpg' alt=''/></p>
                </div>
            </div>
            
        </div>
            
            

            <div className='Footer-copyright'>
                <p> @{new Date().getFullYear() }CodeInn. All rights Reserved </p>
            </div>
</div>
            
        

        </>
     );
}
 
export default Footer;