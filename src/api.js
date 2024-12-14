import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Заміни на свій URL
});

export const fetchUsers = () => api.get('/users');
export const fetchTasks = () => api.get('/tasks');
export const fetchAttachments = () => api.get('/attachments');
export const createTask = (task) => api.post('/tasks', task);
export const createAttachment = (attachment) => api.post('/attachments', attachment);
