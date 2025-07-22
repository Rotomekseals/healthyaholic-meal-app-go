import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/547a4dc8-56db-4f91-8af8-1a0e1c7ceeb7.png" 
              alt="Healthyaholic Logo" 
              className="h-16"
            />
            <p className="text-background/80">
              Celebrating health everyday with fresh, nutritious meals delivered across Delhi NCR.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Meal Plans</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Reviews</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Meal Plans */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Meal Plans</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Fat Loss Plan</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Protein Boost</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Balanced Meal</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Hormonal Balance</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Diabetes Reversal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">Delhi NCR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">hello@healthyaholic.in</span>
              </div>
            </div>
            <Button variant="hero" className="w-full">
              Get Started Today
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Healthyaholic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;