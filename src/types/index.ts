export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  orderDate: string;
  status: 'Fulfilled' | 'Processing' | 'Shipped' | 'Pending Review';
  amount: string;
  followUpRequired: boolean;
  notes: string;
}

export interface EmailDraft {
  id: string;
  category: 'Urgent' | 'Client Inquiries' | 'Follow-ups' | 'Pending Responses' | 'Completed';
  sender: string;
  recipient: string;
  subject: string;
  date: string;
  preview: string;
  body: string[];
  keyPracticeHighlight: string;
}

export interface CalendarEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  type: 'Meeting' | 'Admin Task' | 'Follow-up' | 'Deadline' | 'Reminder';
  duration: string;
}

export interface TaskItem {
  id: string;
  title: string;
  category: 'Admin' | 'Client Care' | 'Documentation' | 'Operations';
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  completed: boolean;
}

export interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: string;
  modified?: string;
  format?: string;
  description?: string;
  children?: FileNode[];
}

export interface LeadRecord {
  id: string;
  businessName: string;
  industry: string;
  website: string;
  contactPage: string;
  location: string;
  keyNotes: string;
  sourceUrl: string;
}

export interface ToolItem {
  name: string;
  category: string;
  proficiency: 'Proficient' | 'Basic' | 'Productivity';
  description: string;
  iconName: string;
}

export interface WhyWorkPoint {
  number: string;
  title: string;
  description: string;
  relevance: string;
}
