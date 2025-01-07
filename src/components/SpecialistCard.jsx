import { Box, Typography } from "@mui/material";
import styles from './SpecialistCard.module.css';

export default function SpecialistCard({ img, name, specialization }) {
  return (
    <Box textAlign="center" style={{ padding: '10px', borderRadius: '10px'}}>
      <div className={styles.specialistCardContainer}>
        <img
          src={img}
          alt={name}
          className={styles.specialistCardImage}
        />
      </div>
      <Typography fontSize={{ xs: 16, md: 24 }} color="#1B3C74" fontWeight={600} style={{ marginTop: '10px' }}>
        {name}
      </Typography>
      <Typography fontSize={{ xs: 14, md: 16 }} fontWeight={500} color="rgba(var(--primary-color))">
        {specialization}
      </Typography>
    </Box>
  );
}
