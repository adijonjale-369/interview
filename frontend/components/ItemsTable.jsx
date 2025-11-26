import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ItemDrawer from './ItemDrawer';
import { useDashboard } from '../context/DashboardContext';

export default function ItemsTable({ items, total, page, pageSize, loading, onPageChange, onPageSizeChange, onSortChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { setFilters } = useDashboard();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const rows = items.map(it => ({
    id: it.id,
    name: it.name,
    date: it.date,
    status: it.status,
    amount: it.amount,
    type: it.type
  }));

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    { field: 'date', headerName: 'Date', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'amount', headerName: 'Amount', width: 120, type: 'number' },
    { field: 'type', headerName: 'Type', width: 140 }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ height: isSmall ? 400 : 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 25, 50]}
          rowCount={total}
          pagination
          paginationMode="server"
          onPageChange={(newPage) => onPageChange(newPage + 1)}
          onPageSizeChange={(newSize) => onPageSizeChange(newSize)}
          sortingMode="server"
          onSortModelChange={(model) => {
            if (model[0]) onSortChange(model[0].field, model[0].sort);
          }}
          loading={loading}
          autoHeight={false}   // Important for fixed height
          sx={{
            width: '100%',
            '& .MuiDataGrid-root': { border: 'none' },
            '& .MuiDataGrid-cell': { whiteSpace: 'normal', wordBreak: 'break-word' }
          }}
          onRowClick={(params) => { setSelected(params.row); setDrawerOpen(true); }}
        />
      </Box>
      <ItemDrawer open={drawerOpen} itemId={selected?.id} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
