import React from 'react';

const Footer = () => {
  return (
    <div style={{ bottom:0 , marginBottom:0}}>
    <footer className='page-footer class-shadow class-ct'>
      <div className='container '>
        <div className='row'>
          <div className='col'>
              <ul>
           
              <i className='fab fa-google fa-2x class-pd class-nav-fnt ' />
              <i className='fab fa-facebook-f fa-2x class-pd class-nav-fnt' />
              <i className='fab fa-twitter fa-2x class-pd class-nav-fnt' />
              <i className='fab fa-instagram fa-2x class-pd class-nav-fnt' />
              <i className="fab fa-linkedin-in fa-2x class-pd class-nav-fnt"></i>
              <i className="fab fa-reddit fa-2x class-pd class-nav-fnt"></i>
            
              </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container class-ct class-nav-fnt'>Copyright © 2019 Web Design And Code by Vt Emaily</div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
