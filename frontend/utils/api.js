// import axios from 'axios';

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

// // Fetch all items with filters
// export async function fetchItems(params) {
//   return axios.get(`${API_BASE}/items`, { params }).then(r => r.data);
// }

// // Fetch single item by ID
// export async function fetchItem(id) {
//   return axios.get(`${API_BASE}/items/${id}`).then(r => r.data);
// }

// // Fetch dropdown filters (status, category, etc.)
// export async function fetchFilters() {
//   return axios.get(`${API_BASE}/filters`).then(r => r.data);
// }

// // ----------------------------
// // NEW: Fetch Summary Metrics
// // (Users, Orders, Revenue)
// // ----------------------------
// export async function fetchSummary() {
//   return axios.get(`${API_BASE}/summary`).then(r => r.data);
// }
// export async function fetchCharts() {
//   return axios.get(`${API_BASE}/charts`).then(r => r.data);
// }
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

// Fetch all items with filters (for table)
export async function fetchItems(params) {
  return axios.get(`${API_BASE}/items`, { params }).then(r => r.data);
}

// Fetch single item by ID
export async function fetchItem(id) {
  return axios.get(`${API_BASE}/items/${id}`).then(r => r.data);
}

// Fetch dropdown filters (status, category, etc.)
export async function fetchFilters() {
  return axios.get(`${API_BASE}/filters`).then(r => r.data);
}

// Fetch Summary Metrics (Users, Orders, Revenue)
export async function fetchSummary() {
  return axios.get(`${API_BASE}/summary`).then(r => r.data);
}

// Fetch chart items (all filtered items)
export async function fetchChartItems(filters = {}) {
  // set a high pageSize to get all items for charts
  const params = { ...filters, page: 1, pageSize: 1000 };
  return axios.get(`${API_BASE}/items`, { params }).then(r => r.data.items);
}

// Optional: Keep old /charts API if needed
export async function fetchCharts() {
  return axios.get(`${API_BASE}/charts`).then(r => r.data);
}

