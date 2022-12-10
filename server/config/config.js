require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "trip_planner",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "peanut_gallery_test",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "peanut_gallery_production",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
