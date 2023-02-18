import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { itemData } from "../ImagesData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Images() {
  return (
    <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>

        {itemData.map((data, index) => (
            <Grid item xs={12} md={4}  key={index}>
            <Item>
              <LazyLoadImage
                alt="loading"
                effect="blur"
                width="100%"
                height="100%"
                src={data.img}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}