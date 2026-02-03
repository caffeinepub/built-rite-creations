import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Sparkles, Shield, Leaf, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export function HomePage() {
  useDocumentTitle('Home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Cutting-Edge Laser Cleaning Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to Built Rite Creations, where cutting-edge technology meets exceptional service. Our state-of-the-art laser cleaning solutions provide a precise, eco-friendly, and efficient way to restore and revitalize surfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Built Rite Creations, we provide safe, efficient, and non-destructive laser cleaning solutions for industrial equipment, historic structures, machinery, metal surfaces, and much more. Our advanced laser technology uses ultra-fast nano pulses of light to precisely remove rust, paint, oil, grease, and other surface contaminants—without harsh chemicals, abrasive blasting, or damage to the underlying material. This non-contact method is ideal for sensitive environments, indoor applications, and precision components, making it the perfect choice for preserving the integrity of even the most delicate surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Built Rite Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Precision Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ultra-fast nano pulses of light for precise, controlled cleaning without damage to underlying materials.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Non-Destructive</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safe for sensitive surfaces and delicate components. No abrasive blasting or harsh chemicals required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Environmentally responsible cleaning with no chemical waste or harmful emissions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Efficient Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fast, effective cleaning that minimizes downtime and maximizes productivity for your operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Laser Cleaning Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Built Rite Creations, we provide eco-friendly laser cleaning and restoration for rust, paint, grease, graffiti, and more—perfect for industrial, commercial, and historical surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'Rust Removal',
                description: 'Effortlessly eliminate corrosion with our precision laser rust removal. Non-abrasive technology that preserves metal integrity.',
              },
              {
                title: 'Graffiti Removal',
                description: 'Restore surfaces to pristine condition. Safely vaporizes paint from brick, stone, metal, and glass.',
              },
              {
                title: 'Oil & Grease Removal',
                description: 'Achieve spotless surfaces ideal for industrial settings. Clean machinery without solvents or abrasives.',
              },
              {
                title: 'Historical Restoration',
                description: 'Preserve the past with gentle laser cleaning. Delicately removes contaminants from aged surfaces.',
              },
              {
                title: 'Paint Stripping',
                description: 'Efficiently remove unwanted paint with precise laser stripping. Perfect for vehicles and machinery.',
              },
              {
                title: 'Weld Preparation',
                description: 'Enhance weld quality by removing oxides and contaminants for stronger, cleaner welds.',
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Contact Built Rite Creations today for a free consultation and quote. Let us show you how our advanced laser cleaning technology can transform your surfaces.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Request a Free Quote Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
