import React, { useEffect } from 'react';
import styles from './CalendlyModal.module.css';

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen && window.Calendly) {
      // Re-initialize Calendly when modal opens
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/team-symbiotes/book-appointement',
        parentElement: document.querySelector('.calendly-inline-widget'),
        minWidth: '320px',
        height: '700px'
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className="calendly-inline-widget" />
      </div>
    </div>
  );
};

export default CalendlyModal;
