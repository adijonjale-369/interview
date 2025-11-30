import React, { useEffect, useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fetchFilters } from '../utils/api';
import { useDashboard } from '../context/DashboardContext';

export default function FiltersPanel({ onFilterChange, loadTable }) {
  const { filters, setFilters } = useDashboard();
  const [options, setOptions] = useState({ categories: [], statuses: [] });
  const [dateRange, setDateRange] = useState([filters.startDate ? new Date(filters.startDate) : null, filters.endDate ? new Date(filters.endDate) : null]);

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
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" gutterBottom>Filters</Typography>
      <TextField
        label="Search"
        value={filters.search}
        onChange={(e)=> setFilters(prev=> ({...prev, search:e.target.value, page:1}))}
        fullWidth
        margin="dense"
        sx={{ mb: 2 }}
      />

      <Select
        value={filters.category}
        displayEmpty
        fullWidth
        onChange={(e)=> setFilters(prev=> ({...prev, category:e.target.value, page:1}))}
        margin="dense"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All Categories</MenuItem>
        {options.categories.map(c=> <MenuItem key={c} value={c}>{c}</MenuItem>)}
      </Select>

      <Select
        value={filters.status}
        displayEmpty
        fullWidth
        onChange={(e)=> setFilters(prev=> ({...prev, status:e.target.value, page:1}))}
        margin="dense"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All Status</MenuItem>
        {options.statuses.map(s=> <MenuItem key={s} value={s}>{s}</MenuItem>)}
      </Select>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          calendars={1}
          value={dateRange}
          onChange={(newVal) => {
            setDateRange(newVal);
            const [start, end] = newVal;
            setFilters(prev=> ({...prev, startDate: start ? start.toISOString() : null, endDate: end ? end.toISOString() : null, page:1}));
          }}
          renderInput={(startProps, endProps) => (
            <Box sx={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: 1, mt: 2, mb: 2 }}>
              <TextField fullWidth {...startProps} />
              <TextField fullWidth {...endProps} />
            </Box>
          )}
        />
      </LocalizationProvider>

      <Box sx={{ display:'flex', flexDirection: isSmall ? 'column' : 'row', gap:1, mt:2 }}>
        <Button variant="contained" onClick={() => onFilterChange && onFilterChange()}>Apply</Button>
        <Button variant="outlined" onClick={()=>reset()}>Reset Filters</Button>
      </Box>
    </Box>
  );
}
