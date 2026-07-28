export type ProjectImage = {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  scope: string[];
  summary: string;
  description: string;
  coverImage: string;
  gallery: ProjectImage[];
  isFeatured?: boolean;
  conceptNotes?: string;
  areaSize?: string;
};

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
};

export type ProcessStep = {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  paymentStage?: string;
};

export type Testimonial = {
  id: string;
  clientName: string;
  roleOrProject: string;
  location: string;
  quote: string;
  year: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type MaterialItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export type ConsultationFormData = {
  // Step 1
  name: string;
  whatsapp: string;
  location: string;
  // Step 2
  projectType: string;
  service: string;
  estimatedArea: string;
  budgetRange: string;
  // Step 3
  description: string;
  targetTimeline: string;
};
