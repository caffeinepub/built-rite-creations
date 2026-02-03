import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

export function AboutPage() {
  useDocumentTitle('About');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Built Rite Creations</h1>
            <p className="text-xl text-muted-foreground">
              Leading the way in advanced laser cleaning technology with a commitment to excellence, innovation, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Built Rite Creations, we provide safe, efficient, and non-destructive laser cleaning solutions for industrial equipment, historic structures, machinery, metal surfaces, and much more. Our advanced laser technology uses ultra-fast nano pulses of light to precisely remove rust, paint, oil, grease, and other surface contaminants—without harsh chemicals, abrasive blasting, or damage to the underlying material.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This non-contact method is ideal for sensitive environments, indoor applications, and precision components, making it the perfect choice for preserving the integrity of even the most delicate surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Precision</h3>
                <p className="text-muted-foreground">
                  We deliver exact, controlled results with cutting-edge laser technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  Excellence in every project, from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Service</h3>
                <p className="text-muted-foreground">
                  Exceptional customer support and responsive communication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Staying at the forefront of laser cleaning technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Built Rite Creations</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Technology</h3>
                  <p>
                    Our state-of-the-art laser systems use ultra-fast nano pulses for precise, controlled cleaning without damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Solutions</h3>
                  <p>
                    No harsh chemicals, no abrasive materials, and no harmful emissions—just clean, green technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                  <p>
                    Our skilled technicians bring years of experience and dedication to every project, large or small.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Versatile Applications</h3>
                  <p>
                    From industrial equipment to historical artifacts, we handle diverse cleaning challenges with precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience the Built Rite Creations difference? Contact us today to discuss your project and discover how our laser cleaning solutions can meet your needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
