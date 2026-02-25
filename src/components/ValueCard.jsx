
const ValueCard = ({ image, title, info, index }) => {
    return (
        <div className="col-lg-4 d-flex flex-column align-items-center py-4 px-3">
            <div
                className="glass-card w-100 h-100 d-flex flex-column align-items-center p-4 rounded-4 shadow-lg text-decoration-none"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%'
                }}
            >
                <div
                    className="value-icon-container mb-4 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                        width: '80px',
                        height: '80px',
                        background: 'var(--gold)',
                        padding: '15px',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <img className="w-100 h-100 object-fit-contain" src={image} alt={title} />
                </div>

                <h4 className="text-center mb-3 fw-bold text-white fs-4">{title}</h4>

                <div
                    className="mb-3 rounded-pill"
                    style={{ width: "60px", height: '3px', backgroundColor: "var(--gold)" }}
                />

                <p className="P-text value-text text-center fs-6 text-light opacity-75 m-0" style={{ lineHeight: '1.6' }}>
                    {info}
                </p>
            </div>
        </div>
    );
};

export default ValueCard;
