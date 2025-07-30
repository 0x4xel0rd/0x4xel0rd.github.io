export interface ProjectData {
  id: string;
  title: string;
  imgdesc: string;
  img?: string;
  github?: string;
  live?: string;
  shortDesc?: string;
  desc?: string;
  skills?: string[];
  medium?: string;
}

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "Network Recon & Vulnerability Automation",
    imgdesc: "Project Image",
    img: "123",
    github: "https://github.com/0x4xel0rd/PortRecon",
    live: "",
    shortDesc: "",
    desc: "",
    skills: ["", ""],
    medium: "",
  },
  {
    id: "2",
    title: "SOC Home Lab Design and Deployment",
    imgdesc: "Project Image",
    img: "123",
    github: "",
    live: "",
    shortDesc: "",
    desc: "",
    skills: ["Skill 01", "Skill 02"],
    medium: "",
  },
  {
    id: "3",
    title: "Watering Hole Attack Simulation (Social Engineering)",
    imgdesc: "Project 03",
    img: "",
    github: "",
    live: "",
    shortDesc: "some info",
    desc: "long description",
    skills: ["Skill 01", "Skill 02", "Skill 03"],
    medium: "",
  },
  {
    id: "4",
    title: "Deep Learning Security: Malware Classification",
    imgdesc: "",
    img: "",
    github: "",
    live: "",
    shortDesc: "",
    desc: "",
    skills: ["", ""],
    medium: "",
  },
];
