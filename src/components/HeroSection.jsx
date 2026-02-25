import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

/**
 * Homepage hero section.
 * Background: slider with slides from Herolist.
 * Animations removed for stable layout.
 */
export default function HeroSection() {
    return (
        <section aria-label="Hero" className="position-relative w-100">
            <div className="position-relative w-100 overflow-hidden" style={{ height: '100vh' }}>
                <HeroSlider />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} aria-hidden />

                <div
                    className="position-absolute d-flex flex-column"
                    style={{
                        zIndex: 20,
                        left: 'clamp(1rem, 5vw, 116px)',
                        right: '1rem',
                        bottom: 'clamp(2rem, 10vh, 100px)',
                        maxWidth: '682px',
                        gap: '2rem'
                    }}
                >
                    <div className="d-flex flex-column" style={{ gap: '1.5rem' }}>
                        <h1
                            className="m-0 leading-tight"
                            style={{
                                color: "var(--hero-white)",
                                fontFamily: "var(--Poppings), sans-serif",
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                fontSize: 'clamp(24px, 6vw, 64px)',
                                lineHeight: 1.1
                            }}
                        >
                            The Epitome of Luxury & Excellence
                        </h1>
                        <p
                            className="m-0"
                            style={{
                                color: "var(--hero-white)",
                                fontSize: 'clamp(14px, 2vw, 24px)',
                                lineHeight: 1.5,
                                maxWidth: '636px',
                                fontWeight: 500
                            }}
                        >
                            DRIVEN BY EXCELLENCE. We provide value-added products and services centered on Luxury, Elegance, Quality and Excellence.
                        </p>
                    </div>

                    <div>
                        <Link
                            to="/Ourbusiness"
                            className="d-flex align-items-center justify-content-center border-0 text-decoration-none"
                            style={{
                                minHeight: '56px',
                                width: '100%',
                                maxWidth: '251px',
                                backgroundColor: 'var(--gold)',
                                color: 'var(--hero-white)',
                                fontSize: '14px',
                                fontWeight: 600,
                                gap: '10px',
                                transition: 'all 0.2s ease',
                                padding: '1rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--hero-white)';
                                e.currentTarget.style.color = 'var(--gold)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--gold)';
                                e.currentTarget.style.color = 'var(--hero-white)';
                            }}
                        >
                            <span style={{ whiteSpace: 'nowrap' }}>DISCOVER OUR SERVICES</span>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ flexShrink: 0 }}
                                aria-hidden
                            >
                                <path
                                    d="M5 12h14m-7-7 7 7-7 7"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
