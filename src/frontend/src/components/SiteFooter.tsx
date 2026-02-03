import { Link } from '@tanstack/react-router';
import { Phone, Mail, Clock, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { businessInfo } from '../content/businessInfo';

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${businessInfo.phone.tel}`} className="hover:text-primary transition-colors">
                  {businessInfo.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-primary transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <div>{businessInfo.hours.days}</div>
                  <div>{businessInfo.hours.time}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Rust Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Oil & Grease Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Historical Restoration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Paint Stripping
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Graffiti Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  And More!
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
