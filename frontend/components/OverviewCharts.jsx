import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

export default function OverviewCharts({ charts, loading }) {
  if (loading || !charts) {
    return <Typography sx={{ mt: 2 }}>Loading charts...</Typography>;
  }

  const months = charts.salesByMonth.map(d => d.month);
  const lineValues = charts.salesByMonth.map(d => d.value);
  const barValues = charts.monthlyComparisons.map(d => d.amount);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>📈 Sales Trend</Typography>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <LineChart
              xAxis={[{ data: months, scaleType: "band" }]}
              series={[{ data: lineValues, label: "Sales" }]}
              height={300}
            />
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>📊 Monthly Revenue</Typography>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <BarChart
              xAxis={[{ data: months, scaleType: "band" }]}
              series={[{ data: barValues, label: "Revenue" }]}
              height={300}
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}


