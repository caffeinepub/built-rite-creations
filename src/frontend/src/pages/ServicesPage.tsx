import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Rust Removal',
    description: 'Effortlessly eliminate corrosion with our precision laser rust removal. Our non-abrasive technology targets and vaporizes rust without harming the underlying metal, ensuring your equipment and structures are restored to their original integrity.',
  },
  {
    title: 'Graffiti Removal',
    description: 'Restore surfaces to their pristine state with our laser graffiti removal. Our method safely vaporizes paint from brick, stone, metal, and glass, preserving the original material and eliminating the need for harsh chemicals.',
  },
  {
    title: 'Oil & Grease Removal',
    description: 'Achieve spotless surfaces with our laser oil and grease removal. Ideal for industrial settings, our technique effectively cleans machinery and components, enhancing performance without the use of solvents or abrasives.',
  },
  {
    title: 'Historical Restoration',
    description: 'Preserve the past with our gentle laser cleaning for historical artifacts. Our approach delicately removes contaminants from aged surfaces, safeguarding intricate details and ensuring the longevity of cultural treasures.',
  },
  {
    title: 'Paint Stripping',
    description: 'Efficiently remove unwanted paint with our precise laser stripping. Our technique targets specific areas, eliminating coatings without damaging the substrate, making it perfect for vehicles, machinery, and structures.',
  },
  {
    title: 'Weld Preparation & Cleaning',
    description: 'Enhance weld quality with our laser cleaning for weld preparation. By removing oxides and contaminants, we ensure stronger, cleaner welds, improving both appearance and structural integrity.',
  },
  {
    title: 'Smoke Damage & Soot Removal',
    description: 'Restore fire-affected areas with our laser smoke and soot removal. Our non-invasive method cleans surfaces without further damage, eliminating odors and residues to bring spaces back to their original condition.',
  },
  {
    title: 'Injection Mold Cleaning',
    description: 'Optimize production with our laser cleaning for injection molds. Our process removes residues without disassembly, reducing downtime and extending the life of your molds, ensuring consistent product quality.',
  },
  {
    title: 'General Clean-Up',
    description: 'Maintain a clean environment with our versatile laser cleaning services. From industrial equipment to public spaces, our eco-friendly method efficiently removes contaminants, ensuring surfaces are safe and presentable.',
  },
];

export function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Laser Cleaning Services</h1>
            <p className="text-xl text-muted-foreground">
              At Built Rite Creations, we provide eco-friendly laser cleaning and restoration for rust, paint, grease, graffiti, and more—perfect for industrial, commercial, and historical surfaces. Safe, non-abrasive, and results with no mess.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">...And Much More!</h2>
            <p className="text-lg text-muted-foreground">
              At Built Rite Creations, we offer much more than our core services—providing tailored laser cleaning solutions for unique, delicate, or complex jobs. From sensitive surface restoration to custom projects and emergency cleanings, our expert team leverages advanced, eco-friendly technology to meet your specific needs with precision and care.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Free Quote Now!</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Welcome to Built Rite Creations, where cutting-edge technology meets exceptional service. Our state-of-the-art laser cleaning solutions provide a precise, eco-friendly, and efficient way to restore and revitalize surfaces.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
