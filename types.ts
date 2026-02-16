
export enum UserRole {
  STUDENT = 'STUDENT',
  ORGANIZER = 'ORGANIZER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: 'Technical' | 'Non-Technical' | 'SIG' | 'Conference';
  status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Draft';
  registrations: number;
  capacity: number;
  qrCode?: string;
}

export interface RecruitmentRole {
  id: string;
  title: string;
  department: string;
  eligibility: string;
  deadline: string;
  description: string;
}

export interface Application {
  id: string;
  roleId: string;
  roleTitle: string;
  studentId: string;
  studentName: string;
  status: 'Pending' | 'Shortlisted' | 'Interview' | 'Selected' | 'Rejected';
  appliedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'Event' | 'Recruitment' | 'System';
  timestamp: string;
  read: boolean;
}
