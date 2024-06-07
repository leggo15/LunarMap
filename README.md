# Lunar Surface Map (exam)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://kristiania-kws2100-2024.github.io/kws2100-exam-ImreAbelvik/)

This map is meant as an educational resource for people who want to learn about the lunar surface. It contains locational data about the different lunar landing sites and their purpose, aswell as basic information about varous craters with links to learn more about them. It also contains some basic information about mare's and the difference between the near and far side of the moon.

## Table of Contents

- [About](#about)
- [DataSources](#DataSources)
- [API](#api)
- [Contributions](#contributions)
- [Grade](#Grade)
- [Authors and Acknowledgment](#authors-and-acknowledgment)

## About

## DataSources

For the moon map, there were not many publicly available data sources with geographical data. Therefore, we needed to map out the polygons ourselves.

**Implementation of the Moon Map**
https://www.openplanetary.org/opm-basemaps/moon-hillshaded-albedo
For this map, we followed the provided instructions but realized that we needed to set -y instead of y.

**DataSource for the markers:**<br>
https://github.com/vasturiano/globe.gl/blob/master/example/moon-landing-sites/moon_landings.json

**DataSource for the craters:**<br>
https://www.openplanetary.org/opm-basemaps/opm-moon-basemap-v0-1 <br>
We used this map to lay out the data for the craters. The process involved finding the location of each crater, selecting a point, and then determining the radius we wanted to assign to the point based on the size of the crater.

**DataSource for the Mare data:**<br>
https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2000JE001244 <br>
https://www.openplanetary.org/opm-basemaps/opm-moon-basemap-v0-1 <br>
We used the same proses for this data source as the craters.

**Data for the far and near side**<br>
https://earthsky.org/space/why-the-moons-near-and-far-sides-look-different/ <br>
For both the far and near sides, we were not able to find geographical data, so we used a picture of the near side and drew the points by hand.

## API

The implimentation of heroku and data API
We began by setting up a user account on Heroku and proceeded to create a PostgreSQL database within the platform. Our database houses all the GeoJSON data required for our mapping application, and we ensured its accessibility by hosting it on Heroku. We created the necessary tables in heroku CLI, and used it for all database management. With the database in place, we started on making an API using Express.js, being a bridge between our application and the database. This API retrievies data from the database and makes it available for utilization within our mapping application. We implemented endpoints tailored to the various tables within our database, to fetch the data for use in our map.

## Contributions

**Group member x:**

- Structure of the code and files.
- Implementation of collecting data from the API to the map.
- Filtering of the layers and missions.
- Part of the code for adding click functionality.
- Implementation of the Moon Map

**Group member y:**

- Styling the webpage
- Converted data into geoJson
- Implemented data shown on the map
- Did the math for the Altitude meter.

**Group member z:**

- Altitude code
- mousePosition.tsx
- Setup postgreSQL database on heroku
- Managed geoJSON data
- Made API for fetching the data

_Otherwise, we all contributed to troubleshooting and optimization of the code_

## Grade

In the grading of our project, we hope the sensor considers the thorough implementation and utilization of Heroku and its services, the narrative behind our moon map, the incorporation of four chosen datasets, the functionality of our project, the creativity demonstrated, the design and styling, and the effort put in our data gathering, non standard map layout.

## Authors and Acknowledgment

We used course materials to set up a basic OpenLayers structure and GitHub Actions. <br>
We appreciate the creators of ChatGPT for creating an advanced code-helping tool.
