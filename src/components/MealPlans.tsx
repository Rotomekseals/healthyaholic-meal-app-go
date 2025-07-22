import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Fat Loss Plan",
    price: "₹22,500",
    description: "3 meals + 1 snack daily",
    features: [
      "Calorie-controlled portions",
      "High protein content",
      "Metabolism boosting ingredients",
      "Weekly progress tracking"
    ],
    popular: false,
    color: "bg-healthy-green"
  },
  {
    id: 2,
    name: "Protein Boost",
    price: "₹25,500",
    description: "3 meals + 1 snack daily",
    features: [
      "High protein content (40g+ per meal)",
      "Muscle building support",
      "Post-workout meals",
      "Performance nutrition"
    ],
    popular: true,
    color: "bg-accent"
  },
  {
    id: 3,
    name: "Balanced Meal",
    price: "₹24,000",
    description: "Weight maintenance plan",
    features: [
      "Perfectly balanced macros",
      "Sustained energy levels",
      "Variety of cuisines",
      "Nutritional wellness"
    ],
    popular: false,
    color: "bg-primary"
  },
  {
    id: 4,
    name: "Hormonal Balance",
    price: "₹24,000",
    description: "Hormone-supporting nutrition",
    features: [
      "PCOS/PCOD friendly",
      "Hormone balancing foods",
      "Anti-inflammatory ingredients",
      "Women's health focus"
    ],
    popular: false,
    color: "bg-healthy-yellow"
  },
  {
    id: 5,
    name: "Diabetes Reversal",
    price: "₹24,000",
    description: "Blood sugar management",
    features: [
      "Low glycemic index foods",
      "Blood sugar control",
      "Diabetic-friendly recipes",
      "Health monitoring support"
    ],
    popular: false,
    color: "bg-destructive"
  },
  {
    id: 6,
    name: "Post Partum Fat Loss",
    price: "₹25,000",
    description: "New mother nutrition",
    features: [
      "Lactation supporting foods",
      "Energy restoration",
      "Safe weight loss",
      "Nutrient-dense meals"
    ],
    popular: false,
    color: "bg-secondary"
  }
];

const MealPlans = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Health Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertly crafted meal plans designed for your specific health goals. 
            All plans include monthly delivery across Delhi NCR.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative overflow-hidden group hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center relative">
                <div 
                  className={`w-16 h-16 ${plan.color} rounded-full mx-auto mb-4 flex items-center justify-center opacity-90`}
                >
                  <span className="text-2xl font-bold text-white">
                    {plan.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-primary mt-2">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button 
                  variant={plan.popular ? "hero" : "healthy"} 
                  className="w-full"
                  size="lg"
                >
                  Start Your Journey
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 animate-slide-up">
          <p className="text-muted-foreground mb-4">
            ✨ All plans include free delivery across Delhi NCR
          </p>
          <Button variant="outline" size="lg">
            Compare All Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MealPlans;