require('dotenv').config();

const app = require('./src/app.js');
const port = process.env.PORT || 30000;

app.listen(port, () => {
    console.log(`Server is running on port 3000 ${port}`);
})