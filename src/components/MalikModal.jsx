import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from 'react-icons/io';

function MalikModal() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate 2 viewport heights
      const scrollThreshold = window.innerHeight * 2;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;

      // Show modal when scrolled 2 viewport heights and hasn't been shown yet
      if (currentScroll >= scrollThreshold && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="malik-modal"
        backdrop={true}
      >
        <Modal.Body className="p-0 position-relative" style={{ backgroundColor: 'transparent' }}>
          <button
            onClick={handleClose}
            className="position-absolute"
            style={{
              top: '10px',
              right: '10px',
              zIndex: 1000,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(227, 171, 19, 0.9)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <IoMdClose size={24} />
          </button>
          <img 
            src="/new/MALIK.jpg" 
            alt="Public Notice" 
            className="w-100 h-auto"
            style={{ display: 'block', maxHeight: '90vh', objectFit: 'contain' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MalikModal;

