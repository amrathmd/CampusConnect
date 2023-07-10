let BASE_URL = "https://localhost:3000";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3000/";
}

export { BASE_URL };
