import express from "express";
import cors from "cors";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/:CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
