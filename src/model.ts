export interface JobInterface {
  id: string;
  city: string;
  companyUrl: string;
  company: string;
  description: string | undefined;
  location: string;
  postedDate: Date | string;
  requirements: string;
  salaryRange: string;
  title: string;
  url: string;
}
