import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Shield, Heart, Users, Star } from "lucide-react";
import mealPrep from "@/assets/meal-prep.jpg";
import smoothieBowl from "@/assets/smoothie-bowl.jpg";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery across Delhi NCR for all subscription plans",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Meals prepared fresh every morning and delivered the same day",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "FSSAI certified kitchen with highest hygiene and quality standards",
    color: "text-healthy-green"
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Nutritionist-designed meals tailored for specific health goals",
    color: "text-destructive"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated nutritionist and customer support team available",
    color: "text-secondary"
  },
  {
    icon: Star,
    title: "1000+ Happy Customers",
    description: "Trusted by thousands of health-conscious individuals across NCR",
    color: "text-healthy-yellow"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Healthyaholic?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to making healthy eating convenient, delicious, and accessible for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-healthy transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4">
                  <feature.icon className={`h-12 w-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              Expertly Crafted <span className="text-primary">Nutrition</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Every meal is carefully planned by our team of nutritionists and chefs to ensure 
              you get the perfect balance of taste, nutrition, and health benefits.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Macro-balanced portions for optimal nutrition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Fresh, locally sourced ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-healthy-green rounded-full"></div>
                <span>No preservatives or artificial additives</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <img 
              src={mealPrep} 
              alt="Healthy meal prep containers" 
              className="rounded-lg shadow-healthy hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            />
            <img 
              src={smoothieBowl} 
              alt="Fresh smoothie bowl" 
              className="rounded-lg shadow-healthy hover:shadow-glow transition-all duration-300 transform hover:scale-105 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;