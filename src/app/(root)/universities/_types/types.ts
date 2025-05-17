export interface University {
  id: string;
  name: string;
  major: 'Engineering' | 'Medical' | 'Other';
  location: {
    city: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  website: string;
  overview: string;
  rankings?: {
    world?: number;
    national?: number;
  };
  imageUrl: string;
}

export type UniversityCategory = 'Engineering' | 'Medical' | 'Other';
