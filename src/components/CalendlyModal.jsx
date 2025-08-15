import React, { useEffect } from 'react';

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    console.log('CalendlyModal useEffect triggered:', { isOpen, hasCalendly: !!window.Calendly });
    
    if (isOpen) {
      if (window.Calendly) {
        console.log('Opening Calendly popup...');
        // Use popup widget instead of inline widget
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/team-symbiotes/book-appointement'
        });
        
        // Close our modal state after Calendly popup opens
        setTimeout(() => {
          onClose();
        }, 100);
      } else {
        console.error('Calendly not loaded yet');
        // Try to load Calendly if not available
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          console.log('Calendly script loaded');
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/team-symbiotes/book-appointement'
            });
            setTimeout(() => onClose(), 100);
          }
        };
        document.head.appendChild(script);
      }
    }
  }, [isOpen, onClose]);

  // Don't render anything - just trigger the popup
  return null;
};

export default CalendlyModal;
