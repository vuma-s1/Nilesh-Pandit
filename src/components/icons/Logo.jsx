import React from 'react';

const Logo = (props) => (
  <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-heading)',
      color: 'currentColor'
    }}
    {...props}
  >
    <img 
      src="/logo.png" 
      alt="VNX Lexicon" 
      style={{
        height: 'clamp(6rem, 4.5rem + 3vw, 7.5rem)',
        width: 'auto',
        objectFit: 'contain'
      }}
    />
  </div>
);

export default Logo;