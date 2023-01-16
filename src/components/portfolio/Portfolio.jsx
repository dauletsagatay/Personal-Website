import React from "react";
import "./portfolio.css";
import FD from "../../assets/family-dash.PNG";
import DStream from "../../assets/DStream.PNG";
import SoileS from "../../assets/SoileS.PNG";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent projects</span>

      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        gap={5}
        textAlign="center"
        // sx={{ width: "97%", m: "1.5%" }}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: "100%", md: "40%" },
            boxShadow: "none",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            image={FD}
            alt=""
            sx={{
              display: "block",
              ml: "",
              mr: "auto",
              width: "100%",
              height: 350,
            }}
          />
          <Link href="https://family-dash.onrender.com/">
            <Typography
              sx={{ mt: "15px" }}
              variant="h5"
              fontWeight="bold"
              color="hsl(0, 0%, 20%)"
            >
              Family Dash
            </Typography>
          </Link>

          <CardContent
            sx={{
              height: "160px",
            }}
          >
            My very first portfolio project. Family Dash is fully functioning,
            responsive social media app MVP developed using MERN stack: <br />
            - Node and Express on server/api side <br />- React and Redux on
            client side. <br />- MongoDB (Mongoose) on database side
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: "100%", sm: "100%", md: "40%" },
            boxShadow: "none",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            image={DStream}
            alt=""
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              width: "100%",
              objectFit: "contain",
              height: 350,
            }}
          />
          <Link href="https://dauletsagatay.github.io/DStream/">
            <Typography
              sx={{ mt: "15px" }}
              variant="h5"
              fontWeight="bold"
              color="hsl(0, 0%, 20%)"
            >
              DStream
            </Typography>
          </Link>

          <CardContent
            sx={{
              height: "160px",
            }}
          >
            Platform for video searching and browsing developed using Youtube
            API:
            <br />- React for front-end <br />- Material-UI for design <br />-
            RapidAPI and Axios for fetching data
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: "100%", sm: "100%", md: "40%" },
            boxShadow: "none",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            image={SoileS}
            alt=""
            sx={{
              display: "block",
              ml: "",
              mr: "auto",
              width: "100%",
              height: 350,
            }}
          />
          <Link href="https://dauletsagatay.github.io/SoileS/">
            <Typography
              sx={{ mt: "15px" }}
              variant="h5"
              fontWeight="bold"
              color="hsl(0, 0%, 20%)"
            >
              SoileS
            </Typography>
          </Link>

          <CardContent
            sx={{
              height: "160px",
            }}
          >
            Chat application developed using: <br />
            - React and SASS on front-end <br />- Firebase on back-end
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
};

export default Portfolio;
