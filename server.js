const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/youthfoundation', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: 'Sign up successful!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
