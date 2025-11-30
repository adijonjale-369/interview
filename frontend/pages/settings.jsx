import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Divider, Grid } from '@mui/material';
import Layout from '../components/Layout';

export default function SettingsPage() {

  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Settings Adarsh
        </Typography>
      </Container>
    </Layout>
  );
}
