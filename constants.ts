
import { UserRole, Event, RecruitmentRole, Application } from './types';

export const IEEE_BRAND = {
  blue: '#00629B',
  black: '#000000',
  white: '#FFFFFF',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png'
};

export const MOCK_USER = {
  id: 'u1',
  name: 'Khanak Aggarwal',
  email: 'khanak.aggarwal@ieee.org',
  role: UserRole.STUDENT,
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
};

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: "MOMENTUM: Harkirat x IEEE IGDTUW",
    description: "A flagship technical session with Harkirat Singh on Open-Source, DevOps, and modern engineering paths. 'It's never too late to start again.'",
    date: '2024-11-20',
    location: 'IGDTUW Auditorium',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200&h=675',
    category: 'Technical',
    status: 'Upcoming',
    registrations: 580,
    capacity: 650
  },
  {
    id: 'e2',
    title: "NASA to CEO: Aisha Bowe Panel",
    description: "In association with the U.S. Embassy, New Delhi. A panel discussion on inspiring women in STEM featuring Aisha Bowe and Prof. R.K. Singh.",
    date: '2024-12-05',
    location: 'Main Conference Hall',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a217294?auto=format&fit=crop&q=80&w=1200&h=675',
    category: 'Conference',
    status: 'Upcoming',
    registrations: 412,
    capacity: 500
  },
  {
    id: 'e3',
    title: 'IEEE Week: Technical Symposium',
    description: 'Our annual multi-day event series featuring competitive hackathons, project displays, and industry networking.',
    date: '2024-10-15',
    location: 'Campus Wide',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200&h=675',
    category: 'Technical',
    status: 'Upcoming',
    registrations: 850,
    capacity: 1000
  }
];

export const MOCK_ROLES: RecruitmentRole[] = [
  {
    id: 'r1',
    title: 'Technical Lead',
    department: 'Software & Projects',
    eligibility: 'Sophomores & Juniors (All Branches)',
    deadline: '2024-12-30',
    description: 'Drive the development of student projects and manage the SIG: AI & ML.'
  },
  {
    id: 'r2',
    title: 'PR & Branding Head',
    department: 'Design & PR',
    eligibility: 'Open to all years',
    deadline: '2024-12-25',
    description: 'Manage official communications and social media presence for the student branch.'
  }
];

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'a1',
    roleId: 'r1',
    roleTitle: 'Technical Lead',
    studentId: 'u1',
    studentName: 'Khanak Aggarwal',
    status: 'Shortlisted',
    appliedAt: '2024-11-05'
  }
];

export const ABOUT_CONTENT = {
  vision: "We aim to foster innovation and technical excellence among young engineers, promoting socially responsible advancements that contribute to a globally competitive India.",
  history: "IEEE IGDTUW began its inspiring journey as IEEE IGIT, inaugurated on February 6, 2004, with just 33 members. Now, the student branch has grown to over 200 active members, offering a vibrant community for aspiring women engineers.",
  activities: "IEEE IGDTUW provides a wide range of platforms that allow students to host and participate in technical and non-technical events, as well as national and international conferences.",
  mission: "Our mission is to instill technical expertise, leadership, and confidence in students through a variety of year-round events such as IEEE Week, IEEE Day Celebrations, and Student Interest Groups (SIGs)."
};
