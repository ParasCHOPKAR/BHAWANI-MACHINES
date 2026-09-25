import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-playfair' });

export const metadata = {
  title: "Bhawani Machines | Premium Industrial Equipment",
  description: "Manufacturer of Commercial Kitchen Equipment, Food Processing Machines, Packaging Lines, Atta Plants, and Cattle Feed Plants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}



function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Column 1: Brand & SEO */}
        <div className="footer-col footer-brand">
          <a href="/" className="footer-logo">
            <img src="/logo_01.png" alt="Bhawani Machines Logo" />
          </a>
          <p className="seo-description">
            Bhawani Machines is a leading manufacturer of premium Industrial Food Processing and Packaging Machinery in Pune, India. We deliver reliable and customized plant solutions.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-links">
          <h4>Quick Links</h4>
          <nav aria-label="Footer Navigation">
            <ul>
              <li><a href="/filling-machine"><i className="fas fa-angle-right"></i> Filling Machine</a></li>
              <li><a href="/automatic-pouch-packing-machine"><i className="fas fa-angle-right"></i> Automatic Pouch Packing Machine</a></li>
              <li><a href="/flow-wrap-machine"><i className="fas fa-angle-right"></i> Flow Wrap Machine</a></li>
              <li><a href="/continuous-band-sealer"><i className="fas fa-angle-right"></i> Continuous Band Sealer</a></li>
              <li><a href="/vacuum-packaging-machine"><i className="fas fa-angle-right"></i> Vacuum Packaging Machine</a></li>
              <li><a href="/about"><i className="fas fa-angle-right"></i> About Us</a></li>
              <li><a href="/contact"><i className="fas fa-angle-right"></i> Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Column 3: Contact Details & Reviews */}
        <div className="footer-col footer-contact">
          <h4>Contact Details</h4>
          <address>
            <p><i className="fas fa-map-marker-alt"></i> Ambegaon Bk., Dalvinagar, Katraj-Narhe Road, Pune – 411046</p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:info@bhawanimachines.com">info@bhawanimachines.com</a></p>
            <p><i className="fas fa-phone-alt"></i> <a href="tel:+917038300451">+91 7038300451</a></p>
          </address>
          <div className="google-review-btn-container">
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn google-review-btn">
              <i className="fab fa-google"></i> Write a Review
            </a>
          </div>
        </div>

        {/* Column 4: Map */}
        <div className="footer-col footer-map">
          <h4>Find Us Here</h4>
          <div className="map-responsive">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7425920506394!2d73.83819287518995!3d18.449992882629886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29581d19b7859%3A0xe3610222a5eb9ba!2sBHAWANI%20MACHINES!5e0!3m2!1sen!2sin!4v1790319640041!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Bhawani Machines in Pune"
            ></iframe>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <p>&copy; {new Date().getFullYear()} Bhawani Machines. All Rights Reserved.</p>
          <p>Developed By <a href="https://mindaxisinnovation.com/" target="_blank" rel="noopener noreferrer">MindAxis Innovation Pvt Ltd.</a></p>
        </div>
      </div>
    </footer>
  );
}
