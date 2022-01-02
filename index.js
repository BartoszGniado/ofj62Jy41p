const express = require('express');
const app = express();
app.use(express.static('./'));
app.listen(6969, () => {
  console.log(`app listening at http://localhost:6969`);
});
