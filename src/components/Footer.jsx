import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        &copy; {year} <span className="brand-name">SmartCoders</span>. All Rights Reserved.
      </p>
      
      {/* Instagram Link */}
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <a 
          href="https://www.instagram.com/_smartcoders/" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: '#bc1888', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Follow us on Instagram 📸
        </a>
      </div>
    </div>
  );
}

export default Footer;