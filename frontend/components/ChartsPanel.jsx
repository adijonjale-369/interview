import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { LineChart, BarChart, PieChart } from '@mui/x-charts';

export default function ChartsPanel({ items = [] }) {
  if (!items || items.length === 0) {
    return <Typography sx={{ p: 2 }}>No chart data available</Typography>;
  }

  const salesByDate = {};
  const monthlyCounts = {};
  const categoryCounts = {};

  items.forEach(it => {
    const d = new Date(it.date);
    const day = d.toISOString().slice(0, 10);
    salesByDate[day] = (salesByDate[day] || 0) + (it.amount || 0);

    const month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    monthlyCounts[month] = (monthlyCounts[month] || 0) + (it.amount || 0);

    categoryCounts[it.category] = (categoryCounts[it.category] || 0) + 1;
  });

  const lineLabels = Object.keys(salesByDate).sort();
  const lineValues = lineLabels.map(k => salesByDate[k]);

  const barLabels = Object.keys(monthlyCounts).sort();
  const barValues = barLabels.map(k => monthlyCounts[k]);

  const pieData = Object.keys(categoryCounts).map(cat => ({
    id: cat,
    label: cat,
    value: categoryCounts[cat],
  }));

  return (
    <Grid container spacing={2}>
      {/* Line Chart */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1">Sales Over Time</Typography>
            <div style={{ height: 250 }}>
              <LineChart xAxis={[{ data: lineLabels }]} series={[{ data: lineValues, label: 'Sales' }]} />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1">Monthly Comparison</Typography>
            <div style={{ height: 250 }}>
              <BarChart xAxis={[{ data: barLabels }]} series={[{ data: barValues, label: 'Monthly Sales' }]} />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1">Category Distribution</Typography>
            <div style={{ height: 250 }}>
              <PieChart series={[{ data: pieData, innerRadius: 30, outerRadius: 100 }]} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
