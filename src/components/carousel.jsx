import { useRef } from 'react';
import Services from './Services';

const ImageSlider = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      const targetScroll = direction === 'left'
        ? current.scrollLeft - scrollAmount
        : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="bg-dark py-5 overflow-hidden">
        <div className="container-fluid px-md-5 px-3 position-relative">
          <div className="flex flex-col gap-6 mb-4 relative text-white">
            <div className="d-flex flex-column align-items-start gap-2">
              <h3 className="fw-bold display-6 text-white">
                Our Businesses
              </h3>
              <div className="rounded-5 mb-4" style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
            </div>

            <p className="text-light opacity-75 max-w-3xl mb-5 fs-5">
              We operate across various sectors, delivering excellence and luxury in every endeavor.
            </p>

            {/* Carousel Navigation Buttons (Top Right) */}
            <div className="position-absolute top-0 end-0 d-none d-md-flex gap-2 pe-3">
              <button
                onClick={() => scroll('left')}
                className="btn btn-outline-warning rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '45px', height: '45px' }}
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="btn btn-outline-warning rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '45px', height: '45px' }}
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="d-flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-inline"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {Services.map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{
                  width: 'min(85vw, 400px)',
                  scrollSnapAlign: 'start'
                }}
              >
                <a href={service.link} className="text-decoration-none group">
                  <div
                    className="position-relative overflow-hidden rounded-4 bg-secondary shadow-lg"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={service.sectionimg}
                      alt={service.info}
                      className="w-100 h-100 object-fit-cover transition-all duration-500 hover-scale"
                      style={{ transition: 'transform 0.5s ease' }}
                    />
                    {/* Overlay */}
                    <div className="position-absolute inset-0 bg-black opacity-0 hover-opacity-25 transition-opacity" />

                    {/* Bottom Info Overlay */}
                    <div className="position-absolute bottom-0 w-100 p-3 d-flex align-items-center gap-2"
                      style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <img src={service.symbol} alt="icon" style={{ width: '30px', height: '30px' }} />
                      <span className="text-white fw-bold">{service.info}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="fs-5 fw-bold text-warning mb-1">
                      {service.Headertext}
                    </h4>
                    <p className="text-light opacity-50 small text-truncate-2">
                      {service.Textinfo.substring(0, 100)}...
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons (Bottom) */}
          <div className="d-flex d-md-none justify-content-center gap-4 mt-4">
            <button
              onClick={() => scroll('left')}
              className="btn btn-warning rounded-circle p-3 shadow-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="btn btn-warning rounded-circle p-3 shadow-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .hover-scale:hover { transform: scale(1.05); }
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}} />
    </>
  );
};

export default ImageSlider;