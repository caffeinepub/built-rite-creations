import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const galleryItems = [
  { title: 'Rust Removal Project', category: 'Industrial' },
  { title: 'Historical Building Restoration', category: 'Heritage' },
  { title: 'Graffiti Removal', category: 'Commercial' },
  { title: 'Paint Stripping', category: 'Automotive' },
  { title: 'Weld Preparation', category: 'Manufacturing' },
  { title: 'Mold Cleaning', category: 'Industrial' },
  { title: 'Metal Surface Restoration', category: 'Industrial' },
  { title: 'Equipment Cleaning', category: 'Manufacturing' },
  { title: 'Smoke Damage Restoration', category: 'Restoration' },
];

export function GalleryPage() {
  useDocumentTitle('Gallery');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Project Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful laser cleaning projects. From industrial equipment to historical restoration, see the Built Rite Creations difference.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm font-medium text-primary mb-2">{item.category}</p>
                    <p className="text-muted-foreground">Project Image</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Surfaces?</h2>
            <p className="text-lg text-muted-foreground">
              Contact Built Rite Creations today to discuss your project and see how our advanced laser cleaning technology can deliver exceptional results.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
