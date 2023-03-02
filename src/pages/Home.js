import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Questions from "../components/Questions";

function HomePage() {
  return (
    <div>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h3" color="primary" align="center">
          Hi, welcome to the your Daily Health Quiz!
        </Typography>
      </Box>

      <Typography variant="h6" color="secondary">
        {" "}
        Here, similar to Ayurvedic Medicine, we believe food can be healing.
        Below, we have a daily yes or no health quiz that gives food suggestions
        based on any imbalances you may or may not be experincing! Some of these questions may sound a little far fetched or wild to you, but go with it...our bodies are weird sometimes! If you're only experiencing one of the symptoms listed, please still answer yes. {" "}
      </Typography>

     <div>
      <Questions/>
     </div>
      <p>
        Note we have studied nutrition and Ayurvedic medicine however we're not
        certified Ayurvedic or Western Doctors. These are suggestions and we are
        not held liable. All these suggests are food related not herbal. If you'd like to see a trained Ayuvedic Doctor. I highly suggest contacting Kerala or searching for a doctor at NAMA.{" "}
      </p>
    </div>
  );
}
export default HomePage;
