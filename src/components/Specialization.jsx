import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import {Box} from '@mui/material';

// Image paths for each specialization (replace with actual paths or URLs)
import dentistryIcon from './../assets/images/dentistry-icon.png';
import primaryCareIcon from './../assets/images/primary-care-icon.png';
import cardiologyIcon from './../assets/images/cardiology-icon.png';
import mriResonanceIcon from './../assets/images/mri-resonance-icon.png';
import bloodTestIcon from './../assets/images/blood-test-icon.png';
import psychologistIcon from './../assets/images/psychologist-icon.png';
import laboratoryIcon from './../assets/images/laboratory-icon.png';
import xRayIcon from './../assets/images/x-ray-icon.png';

import styles from './Specialization.module.css';

const specializations = [
  { name: 'Dentistry', icon: dentistryIcon },
  { name: 'Primary Care', icon: primaryCareIcon },
  { name: 'Cardiology', icon: cardiologyIcon },
  { name: 'MRI Resonance', icon: mriResonanceIcon },
  { name: 'Blood Test', icon: bloodTestIcon },
  { name: 'Psychologist', icon: psychologistIcon },
  { name: 'Laboratory', icon: laboratoryIcon },
  { name: 'X-Ray', icon: xRayIcon }
];

const Specialization = () => {
  return (
    <div className={styles.specializationContainer}>
      {/* Heading */}
      <Typography variant="h4" style={{ fontWeight: 600, fontSize: '28px', marginBottom: '20px', marginTop:'20px', textAlign:'center' }}>
        Find by Specialization
      </Typography>

      {/* Grid of specializations */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        {specializations.map((specialization, index) => (
          <Grid
            item
            xs={6}    // 2 items per row on extra small screens (mobile)
            sm={4}    // 3 items per row on small screens (tablet)
            md={3}    // 4 items per row on medium screens (desktop)
            lg={3}    // 4 items per row on large screens
            key={index}
            style={{ textAlign: 'center' }}
          >
            <Box className={styles.specializationItem}>
            <img
              src={specialization.icon}
              alt={specialization.name}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
                marginBottom: '10px',
              }}
            />
            <Typography>{specialization.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        style={{
          display: 'block',
          margin: '0 auto',
          backgroundColor: 'var(--primary-color)', // Ensure this CSS variable is defined globally
          color: 'white',
          padding: '10px 20px',
        }}
      >
        View All
      </Button>
    </div>
  );
};

export default Specialization;
