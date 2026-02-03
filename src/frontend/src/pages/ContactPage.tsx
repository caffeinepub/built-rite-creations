import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { useState } from 'react';
import { buildContactMailto } from './contactMailto';
import { businessInfo } from '../content/businessInfo';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactPage() {
  useDocumentTitle('Contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Save the submitted data for the success state
    setLastSubmitted({ ...formData });
    setIsSubmitted(true);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setLastSubmitted(null);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with Built Rite Creations today. We're here to answer your questions and provide expert laser cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted && lastSubmitted ? (
                    <div className="space-y-6">
                      <Alert className="border-primary/50 bg-primary/5">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <AlertTitle className="text-lg font-semibold">Message Ready!</AlertTitle>
                        <AlertDescription className="mt-2 space-y-2">
                          <p>
                            Your quote request has been prepared. Click the button below to send it via your email client.
                          </p>
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-3">
                        <Button
                          asChild
                          size="lg"
                          className="w-full"
                        >
                          <a href={buildContactMailto(lastSubmitted)}>
                            <Send className="mr-2 h-5 w-5" />
                            Send Email Now
                          </a>
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full"
                          onClick={handleNewMessage}
                        >
                          Send Another Message
                        </Button>
                      </div>

                      <div className="pt-4 border-t space-y-2">
                        <p className="text-sm font-medium">Or contact us directly:</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>
                            <span className="font-medium">Phone:</span>{' '}
                            <a href={`tel:${businessInfo.phone.tel}`} className="hover:text-primary transition-colors">
                              {businessInfo.phone.display}
                            </a>
                          </p>
                          <p>
                            <span className="font-medium">Email:</span>{' '}
                            <a
                              href={`mailto:${businessInfo.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {businessInfo.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={5}
                          className={errors.message ? 'border-destructive' : ''}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Reach out to Built Rite Creations through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${businessInfo.phone.tel}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {businessInfo.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">{businessInfo.hours.days}</p>
                      <p className="text-muted-foreground">{businessInfo.hours.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-muted-foreground">{businessInfo.serviceArea}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href={businessInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <SiFacebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href={businessInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <SiInstagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href={businessInfo.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <SiYoutube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
