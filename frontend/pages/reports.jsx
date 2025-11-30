import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Layout from '../components/Layout';
import OverviewCharts from '../components/OverviewCharts';
import { fetchCharts, fetchSummary } from '../utils/api';

export default function ReportsPage() {
  const [chartsData, setChartsData] = useState(null);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchCharts().then(setChartsData),
      fetchSummary().then(setSummary)
    ]).finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Reports
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <OverviewCharts charts={chartsData} loading={loading} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Summary Metrics</Typography>
              {summary.map((metric, idx) => (
                <Box key={idx} sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eee' }}>
                  <Typography variant="body2" color="textSecondary">{metric.label}</Typography>
                  <Typography variant="h6">{metric.value}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

        
        </Grid>
      </Container>
    </Layout>
  );
}
