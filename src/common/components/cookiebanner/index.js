import React from 'react'
import CookieConsent from 'react-cookie-consent';


const CookieBanner = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="myAwesomeCookieName2"
                style={{
                    backgroundImageSource: "linear-gradient(90deg, #8f53ff 0.05%, #6076e7 100.16%)",
                    background: "rgba(87, 35, 171, 0.1)",
                    backdropFilter: "blur(20px)",
                    padding: "20px 30px",
                    fontSize: "20px"
                }}
                buttonStyle={{ fontSize: "17px", color: '#000' }}
                expires={150}
            >
                This website use cookies to imporve your experience, We'll assume you're awesome with this
            </CookieConsent>
        </div>
    )
}

export default CookieBanner;
