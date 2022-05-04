const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// create a GET route
// app.get("/express_backend", (req, res) => {

//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

const AWS = require("aws-sdk");

const cloudFront = new AWS.CloudFront.Signer(
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

// Handle Login Route
router.post("/login-route", (req, res) => {
  /* Code to Verify the credentials */

  // Set Cookies after successful verification
  const cookie = cloudFront.getSignedCookie({
    url: "https://cdn.your-domain.com/test/a.txt",
    expires: Math.floor(new Date().getTime() / 1000) + 60 * 60 * 1, // Current Time in UTC + time in seconds, (60 * 60 * 1 = 1 hour)
  });

  res.cookie("CloudFront-Key-Pair-Id", cookie["CloudFront-Key-Pair-Id"], {
    domain: ".your-domain.com",
    path: "/",
    httpOnly: true,
  });

  res.cookie("CloudFront-Expires", cookie["CloudFront-Expires"], {
    domain: ".your-domain.com",
    path: "/",
    httpOnly: true,
  });

  res.cookie("CloudFront-Signature", cookie["CloudFront-Signature"], {
    domain: ".your-domain.com",
    path: "/",
    httpOnly: true,
  });

  // Send some response
  res.send({ some: "response" });
});
