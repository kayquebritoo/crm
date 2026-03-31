import { db } from "./firebase";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  Timestamp,
  getDocs 
} from "firebase/firestore";

// Types
export interface Project {
  id?: string;
  name: string;
  description: string;
  progress: number;
  status: 'backlog' | 'active' | 'review' | 'done';
  type: 'design' | 'dev' | 'ops';
  createdAt: any;
}

export interface Lead {
  id?: string;
  name: string;
  tag: string;
  status: 'new' | 'contacted' | 'negotiating' | 'closed';
  createdAt: any;
}

// Collection Names
const PROJECTS_COLLECTION = "projects";
const LEADS_COLLECTION = "leads";

// --- Project CRUD ---
export const addProject = async (project: Omit<Project, 'id' | 'createdAt'>) => {
  return await addDoc(collection(db, PROJECTS_COLLECTION), {
    ...project,
    createdAt: Timestamp.now(),
  });
};

export const updateProject = async (id: string, updates: Partial<Project>) => {
  const projectRef = doc(db, PROJECTS_COLLECTION, id);
  return await updateDoc(projectRef, updates);
};

export const deleteProject = async (id: string) => {
  const projectRef = doc(db, PROJECTS_COLLECTION, id);
  return await deleteDoc(projectRef);
};

export const subscribeToProjects = (callback: (projects: Project[]) => void) => {
  const q = query(collection(db, PROJECTS_COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    callback(projects);
  });
};

// --- Lead CRUD ---
export const addLead = async (lead: Omit<Lead, 'id' | 'createdAt'>) => {
  return await addDoc(collection(db, LEADS_COLLECTION), {
    ...lead,
    createdAt: Timestamp.now(),
  });
};

export const updateLead = async (id: string, updates: Partial<Lead>) => {
  const leadRef = doc(db, LEADS_COLLECTION, id);
  return await updateDoc(leadRef, updates);
};

export const subscribeToLeads = (callback: (leads: Lead[]) => void) => {
  const q = query(collection(db, LEADS_COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const leads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
    callback(leads);
  });
};
