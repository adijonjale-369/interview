import React, { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext(null);

export const useDashboard = () => useContext(DashboardContext);

export default function DashboardProvider({ children }) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    status: '',
    startDate: null,
    endDate: null,
    page: 1,
    pageSize: 10,
    sortBy: 'date',
    sortDir: 'desc'
  });

  useEffect(() => {
    // Optionally hydrate from localStorage if you want
    const saved = typeof window !== 'undefined' && localStorage.getItem('dashboard_filters');
    if (saved) {
      try {
        setFilters(prev => ({...prev, ...JSON.parse(saved)}));
      } catch(e){}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dashboard_filters', JSON.stringify(filters));
    }
  }, [filters]);

  return (
    <DashboardContext.Provider value={{ filters, setFilters }}>
      {children}
    </DashboardContext.Provider>
  );
}
    