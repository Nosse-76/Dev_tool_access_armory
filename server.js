const express = require("express");
const app = express();
const PORT = 3000;

app.use(require("cors")());


const authorizedUsers = [
    "contacte.nosse"
];

app.get("/check", (req, res) => {
    const steamId = req.query.id;

    const hasAccess = authorizedUsers.includes(steamId);

    res.json({ access: hasAccess });
    console.log("SteamID reçu :", steamId);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});