import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function SummaryCards({ metrics }) {
  const summary = metrics || []; // <-- IMPORTANT FIX

  return (
    <Box
      display="flex"
      gap={2}
      flexWrap="wrap"
      alignItems="stretch"
      sx={{ mt: 1 }}
    >
      {summary.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Loading summary...
        </Typography>
      ) : (
        summary.map((m) => (
          <Paper
            key={m.id}
            elevation={2}
            sx={{
              p: 2,
              minWidth: 150,
              flex: "1 1 200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              {m.label}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
              {m.value.toLocaleString()}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
}
