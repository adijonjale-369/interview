import React, { useEffect, useState } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import { fetchItem } from '../utils/api';

export default function ItemDrawer({ open, onClose, itemId }) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (open && itemId) {
      fetchItem(itemId).then(d => setItem(d));
    }
  }, [open, itemId]);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 360, p:2 }}>
        {!item ? <Typography>Loading...</Typography> : (
          <>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2" gutterBottom>{item.category} • {item.status}</Typography>
            <Typography>Date: {new Date(item.date).toLocaleString()}</Typography>
            <Typography>Sales: {item.sales}</Typography>
            <Typography>Revenue: ${item.revenue}</Typography>
            <Typography sx={{ mt:2 }}>{item.description}</Typography>
          </>
        )}
      </Box>
    </Drawer>
  );
}
