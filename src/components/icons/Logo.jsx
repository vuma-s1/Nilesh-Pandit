import React from 'react';

const Logo = (props) => (
  <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontFamily: 'var(--font-heading)',
      color: 'currentColor',
      fontSize: 'clamp(0.8rem, 0.6rem + 1vw, 1.2rem)'
    }}
    {...props}
  >
    {/* Stylized "V" icon */}
    <div
      style={{
        width: 'clamp(24px, 20px + 1vw, 32px)',
        height: 'clamp(24px, 20px + 1vw, 32px)',
        border: '2px solid currentColor',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem)',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.05em',
        flexShrink: 0
      }}
    >
      V
    </div>
    
    {/* Name text */}
    <div
      style={{
        fontSize: 'clamp(0.7rem, 0.5rem + 0.8vw, 1rem)',
        fontWeight: '600',
        color: 'rgba(228, 228, 228, 0.8)',
        letterSpacing: '0.02em',
        lineHeight: '1.2',
        whiteSpace: 'nowrap'
      }}
    >
      Shri Vikram P
    </div>
  </div>
);

export default Logo;