import { Button } from "@/components/ui/button";
import heroSalad from "@/assets/hero-salad.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSalad} 
          alt="Fresh healthy salad" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-bounce-gentle">
          <img 
            src="/lovable-uploads/547a4dc8-56db-4f91-8af8-1a0e1c7ceeb7.png" 
            alt="Healthyaholic Logo" 
            className="h-24 md:h-32 mx-auto"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Celebrate Health 
          <span className="block text-secondary">Everyday</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          Fresh, nutritious meals delivered to your doorstep across Delhi NCR. 
          Transform your health journey with our expertly crafted meal plans.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            Explore Meal Plans
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            How It Works
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white">1000+</div>
            <div className="text-white/80 text-sm">Happy Customers</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white">6</div>
            <div className="text-white/80 text-sm">Meal Plans</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-white">Delhi NCR</div>
            <div className="text-white/80 text-sm">Delivery Areas</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-healthy-yellow/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-bounce-gentle delay-500"></div>
    </section>
  );
};

export default Hero;