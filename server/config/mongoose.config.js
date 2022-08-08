const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/guardianwear", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("Connected to Guardian Wear DB"))
.catch((err) => console.log("ERROR", err))