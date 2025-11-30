import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fetchFilters } from '../utils/api';
import { useDashboard } from '../context/DashboardContext';

export default function FiltersPanel({ onFilterChange, loadTable }) {
  const { filters, setFilters } = useDashboard();
  const [options, setOptions] = useState({ categories: [], statuses: [] });
  const [dateRange, setDateRange] = useState([
    filters.startDate ? new Date(filters.startDate) : null,
    filters.endDate ? new Date(filters.endDate) : null
  ]);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchFilters().then(data => setOptions(data));
  }, []);

  const reset = () => {
    const newFilters = {
      search: '',
      category: '',
      status: '',
      startDate: null,
      endDate: null,
      page: 1,
      pageSize: 10,
      sortBy: 'date',
      sortDir: 'desc'
    };
    setFilters(newFilters);
    setDateRange([null, null]);
    if (loadTable) loadTable(newFilters);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "800px"
      }}
    >

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: isSmall ? "wrap" : "nowrap"
        }}
      >
        <TextField
          placeholder="Search"
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value, page: 1 }))}
          fullWidth
          size='small'
        />

        <Select
          value={filters.category}
          fullWidth
          size="small"
          displayEmpty
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value, page: 1 }))}
        >
          <MenuItem value="">Category</MenuItem>
          {options.categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </Select>

        <Select
          value={filters.status}
          fullWidth
          size="small"
          displayEmpty
          onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value, page: 1 }))}
        >
          <MenuItem value="">Status</MenuItem>
          {options.statuses.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
        </Select>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box sx={{ flex: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              value={dateRange}
              onChange={(newVal) => {
                setDateRange(newVal);
                const [start, end] = newVal;
                setFilters(prev => ({
                  ...prev,
                  startDate: start ? start.toISOString() : null,
                  endDate: end ? end.toISOString() : null,
                  page: 1
                }));
              }}
              slotProps={{
                textField: { size: "small", fullWidth: true }
              }}
            />
          </LocalizationProvider>
        </Box>

        <Button variant="outlined" size="small" onClick={()=>reset()}
          sx={{
            flexGrow: 1,
            height: "40px"
          }}>
          Reset
        </Button>

        <Button
          variant="contained"
          size="small"
          sx={{
            flexGrow: 1,
            height: "40px"
          }}
          onClick={() => onFilterChange && onFilterChange()}
        >
          Apply Filters
        </Button>
      </Box>


    </Paper>
  );
}
