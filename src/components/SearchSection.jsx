import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Box, Button, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import doctor_img from './../assets/images/doctor.png';
import lab_img from './../assets/images/lab.png';
import hospital_img from './../assets/images/hospital.png';
import medical_store_img from './../assets/images/medical_store.png';
import ambulance_img from './../assets/images/ambulance.png';

function StateCityDropdown() {
  const categories = [
    { name: "Doctors", icon: doctor_img },
    { name: "Labs", icon: lab_img },
    { name: "Hospitals", icon: hospital_img },
    { name: "Medical Store", icon: medical_store_img },
    { name: "Ambulance", icon: ambulance_img },
  ];

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [activeBox, setActiveBox] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectedState}`
          );
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    console.log("State:", selectedState);
    console.log("City:", selectedCity);
  };

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        position: "relative",
        bottom: "20vh",
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "32px 64px",
      }}
    >
      <Stack direction="column" spacing={3}>
        <Box sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              select
              label="State"
              value={selectedState}
              onChange={handleStateChange}
              variant="outlined"
              fullWidth
            >
              {states.length > 0 ? (
                states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No States Available</MenuItem>
              )}
            </TextField>
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              select
              label="City"
              value={selectedCity}
              onChange={handleCityChange}
              variant="outlined"
              fullWidth
              disabled={!selectedState}
            >
              {cities.length > 0 ? (
                cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No Cities Available</MenuItem>
              )}
            </TextField>
          </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--primary-color)",
                textTransform: "none",
                fontSize:"16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                padding:"12px 48px"
              }}
              onClick={handleSubmit}
            >
              <SearchIcon />
              Search
            </Button>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            You may be looking for
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            {categories.map((category, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: "180px",
                  height: "120px",
                  borderRadius: "10px",
                  border: activeBox === index ? "2px solid skyblue" : "1px solid #ccc",
                  padding: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onClick={() => handleBoxClick(index)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginBottom: '8px',
                    }}
                  />
                  <Box sx={{ fontWeight: "bold" }}>{category.name}</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default StateCityDropdown;
