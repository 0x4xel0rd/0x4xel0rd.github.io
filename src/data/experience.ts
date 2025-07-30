export interface Data {
  id: string;
  title: string;
  company: string;
  year: string;
  location: string;
  description?: string;
}

export const works: Data[] = [
  {
    id: "1",
    title: "Security Engineer Intern (Multiple Domains)",
    company: "Securely Yours LLC",
    year: "May 2025 - Present",
    location: "Bloomfield Hills, Michigan",
    description: "",
  },
  {
    id: "2",
    title: "Security Operations Center (SOC) Intern",
    company: "Securely Managed LLC",
    year: "Feb 2025 - May 2025",
    location: "Bloomfield Hills, Michigan",
    description: "Description",
  },
  {
    id: "3",
    title: "Graduate Teaching Assistant, Hacking for Defense",
    company:
      "Simone Center for Innovation and Entrepreneurship, Rochester Institute of Technology",
    year: "Jan 2023 - Jul 2024",
    location: "Rochester, New York",
    description: "",
  },
  {
    id: "4",
    title: "Freelance Security Researcher / Penetration Tester",
    company: "Freelance",
    year: "March 2021 - Jun 2022",
    location: "Remote",
    description: "",
  },
];

export const education: Data[] = [
  {
    id: "1",
    title: "Master of Science in Computing Security",
    company: "Rochester Institute of Technology",
    year: "Aug 2022 - Dec 2024",
    location: "Rochester, NY",
    description: "",
  },
  {
    id: "2",
    title: "Bachelor of Technology in Computer Science and Engineering",
    company: "Haldia Institute of Technology (MAKAUT)",
    year: "Aug 2015 - May 2019",
    location: "Kolkata, India",
    description: "",
  },
];
