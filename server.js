// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bcrypt = require("bcryptjs");
// // const bodyParser = require("body-parser");
// // require("dotenv").config();

// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json());

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log("Connected to MongoDB"))
// //     .catch(err => console.log("MongoDB Connection Error: ", err));

// // // User Schema
// // const UserSchema = new mongoose.Schema({
// //     username: String,
// //     password: String
// // });

// // const User = mongoose.model("User", UserSchema, "users");

// // // Login Route
// // app.post("/login", async (req, res) => {
// //     const { username, password } = req.body;

// //     if (!username || !password) {
// //         return res.status(400).json({ success: false, message: "All fields are required!" });
// //     }

// //     try {
// //         const user = await User.findOne({ username });

// //         if (!user) {
// //             return res.status(401).json({ success: false, message: "Invalid username or password!" });
// //         }

// //         const isMatch = await bcrypt.compare(password, user.password);

// //         if (!isMatch) {
// //             return res.status(401).json({ success: false, message: "Invalid username or password!" });
// //         }

// //         res.json({ success: true, message: "Login successful!" });

// //     } catch (error) {
// //         res.status(500).json({ success: false, message: "Login failed!" });
// //     }
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5005;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Owner Schema (If owners are separate from users)
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.log("MongoDB Connection Error: ", err));

// // User Schema
// const UserSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// const User = mongoose.model("User", UserSchema, "users");

// // Owner Schema (separate for owners)
// const OwnerSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// const Owner = mongoose.model("Owner", OwnerSchema, "owners");

// // Login Route for Users
// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ success: false, message: "All fields are required!" });
//     }

//     try {
//         const user = await User.findOne({ username });

//         if (!user) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         res.json({ success: true, message: "Login successful!" });

//     } catch (error) {
//         res.status(500).json({ success: false, message: "Login failed!" });
//     }
// });

// // Login Route for Owners
// app.post("/ownerlogin", async (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ success: false, message: "All fields are required!" });
//     }

//     try {
//         const owner = await Owner.findOne({ username });

//         if (!owner) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         const isMatch = await bcrypt.compare(password, owner.password);

//         if (!isMatch) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         res.json({ success: true, message: "Login successful!" });

//     } catch (error) {
//         res.status(500).json({ success: false, message: "Login failed!" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//-----------------------------
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
// require("dotenv").config();


// // Shop Schema
// const ShopSchema = new mongoose.Schema({
//     name: String,
//     location: String,
//     owner: String
// });

// const Shop = mongoose.model("Shop", ShopSchema, "shops"); // Collection name: shops

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.error("MongoDB Connection Error:", err));

// // User Schema
// const UserSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model("User", UserSchema, "users");

// // Owner Schema
// const OwnerSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const Owner = mongoose.model("Owner", OwnerSchema, "owners");

// // Generic Login Function
// const loginUser = async (Model, req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ success: false, message: "All fields are required!" });
//     }

//     try {
//         const user = await Model.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ success: false, message: "Invalid username or password!" });
//         }

//         res.json({ success: true, message: "Login successful!" });
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ success: false, message: "Login failed!" });
//     }
// };

// // Login Routes
// app.post("/login", (req, res) => loginUser(User, req, res));
// app.post("/ownerlogin", (req, res) => loginUser(Owner, req, res));

// // Start Server
// const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Shop Schema
const ShopSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    ownerName: { type: String, required: true },
    openingDays: { type: [String], required: true },
    sameAllDay: { type: Boolean, default: false },
    timings: {
        morning: { open: String, close: String },
        evening: { open: String, close: String }
    },
    numEmployees: { type: Number, required: true }
});

const Shop = mongoose.model("Shop", ShopSchema, "shops");

// User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema, "users");

// Owner Schema
const OwnerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Owner = mongoose.model("Owner", OwnerSchema, "owners");

// Generic Login Function
const loginUser = async (Model, req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    try {
        const user = await Model.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid username or password!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid username or password!" });
        }

        res.json({ success: true, message: "Login successful!" });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

// Add a Shop Endpoint
app.post("/add-shop", async (req, res) => {
    try {
        const { shopName, ownerName, openingDays, sameAllDay, timings, numEmployees } = req.body;

        if (!shopName || !ownerName || !openingDays.length || !timings.morning.open || !timings.morning.close || !timings.evening.open || !timings.evening.close || !numEmployees) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const newShop = new Shop({ shopName, ownerName, openingDays, sameAllDay, timings, numEmployees });
        await newShop.save();

        res.json({ success: true, message: "Shop added successfully!" });
    } catch (error) {
        console.error("Error adding shop:", error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
});

app.get('/api/shops', async (req, res) => {
    try {
        // Assuming the owner is identified via session or request query
        const ownerEmail = req.query.ownerEmail; // Get owner email from frontend

        if (!ownerEmail) {
            return res.status(400).json({ error: "Owner email is required" });
        }

        const shops = await Shop.find({ ownerEmail }); // Fetch shops owned by this owner
        res.json(shops);
    } catch (error) {
        console.error("Error fetching shops:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

