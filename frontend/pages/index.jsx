import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FiltersPanel from '../components/FiltersPanel';
import SummaryCards from '../components/SummaryCards';
import ChartsPanel from '../components/ChartsPanel';
import ItemsTable from '../components/ItemsTable';
import OverviewCharts from '../components/OverviewCharts'; // <-- import your new component

import { fetchItems, fetchSummary, fetchCharts } from '../utils/api';
import { useDashboard } from '../context/DashboardContext';

export default function DashboardPage() {
  const { filters, setFilters } = useDashboard();

  const [data, setData] = useState({
    items: [],
    total: 0,
    page: 1,
    pageSize: 10
  });

  const [summary, setSummary] = useState([]); 
  const [chartsData, setChartsData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ============= LOAD TABLE DATA ====================
  const loadTable = async () => {
    setLoading(true);
    try {
      const res = await fetchItems(filters);
      setData({
        items: res.items,
        total: res.total,
        page: res.page,
        pageSize: res.pageSize,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTable();
  }, [
    filters.page,
    filters.pageSize,
    filters.search,
    filters.category,
    filters.status,
    filters.startDate,
    filters.endDate,
    filters.sortBy,
    filters.sortDir
  ]);

  // ============= LOAD SUMMARY METRICS ================
  useEffect(() => {
    fetchSummary().then(setSummary).catch(console.error);
  }, []);

  // ============= LOAD CHARTS DATA ====================
  useEffect(() => {
    fetchCharts().then(setChartsData).catch(console.error);
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f7f8fa' }}>
      
      {/* SIDEBAR */}
      <Box
        sx={{
          // width: 200,
          minHeight: '100vh',
          bgcolor: '#1e1e2f',
          color: 'white',
          p: 2,
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '240px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>

          {/* ==== SUMMARY CARDS ==== */}
          <SummaryCards metrics={summary} />

          {/* ==== OVERVIEW CHARTS ==== */}
          <Box sx={{ mt: 4, mb: 4 }}>
            <OverviewCharts charts={chartsData} loading={loading} />
            {/* <OverviewCharts  /> */}
          </Box>

          <Grid container spacing={2} sx={{ mt: 2 }}>

            {/* FILTER PANEL */}
            <Grid item xs={12} md={3}>
              <FiltersPanel onFilterChange={() => setFilters(prev => ({ ...prev, page: 1 }))}/>
            </Grid>

            {/* CHARTS PANEL */}
            <Grid item xs={12} md={9}>
              <ChartsPanel items={data.items} />
            </Grid>

            {/* TABLE */}
            <Grid item xs={12}>
              <ItemsTable
                items={data.items}
                total={data.total}
                page={data.page}
                pageSize={data.pageSize}
                loading={loading}
                onPageChange={(page) => setFilters(prev => ({ ...prev, page }))}
                onPageSizeChange={(pageSize) => setFilters(prev => ({ ...prev, pageSize, page: 1 }))}
                onSortChange={(sortBy, sortDir) => setFilters(prev => ({ ...prev, sortBy, sortDir }))}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
