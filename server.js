const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ⭐ TUS FRASES PERSONALIZADAS
// ⭐ TUS FRASES PERSONALIZADAS
const frases = [
    {
        _id: "1",
        content: "Ponme otra cerveza, pero sin espuma que ya me he afeitado esta mañana",
        author: "Jordi Cordomí",
        tags: ["cerveza", "humor"],
        length: 71
    },
    {
        _id: "3",
        content: "El vino blanco es para el marisco y el tinto, para las personas",
        author: "Jordi Cordomí",
        tags: ["vino", "humor"],
        length: 64
    },
    {
        _id: "6",
        content: "Se estaba ahogando",
        author: "Jordi Cordomí",
        tags: ["cerveza", "humor"],
        length: 18
    },
    {
        _id: "7",
        content: "Jefe, ponme otra que esta tiene un agujero",
        author: "Jordi Cordomí",
        tags: ["cerveza", "humor"],
        length: 42
    },
    {
        _id: "8",
        content: "Camarero, tráete otro sonajero",
        author: "Jordi Cordomí",
        tags: ["bebida", "humor"],
        length: 31
    },
    {
        _id: "9",
        content: "Dale una patada al olivo y ponte unas aceitunas, maestro",
        author: "Jordi Cordomí",
        tags: ["comida", "humor"],
        length: 57
    },
    {
        _id: "12",
        content: "Quiero un café solo, así que todo el mundo fuera del bar",
        author: "Jordi Cordomí",
        tags: ["café", "humor"],
        length: 57
    },
    {
        _id: "14",
        content: "Todos pa fuera que quiero un café solo",
        author: "Jordi Cordomí",
        tags: ["café", "humor"],
        length: 39
    },
    {
        _id: "15",
        content: "Maestro ponme otra que ésta tiene un agujero",
        author: "Jordi Cordomí",
        tags: ["cerveza", "humor"],
        length: 45
    },
    {
        _id: "17",
        content: "Ponme un cubata, pero con poca Coca-Cola que mañana madrugo",
        author: "Jordi Cordomí",
        tags: ["alcohol", "humor"],
        length: 60
    },
    {
        _id: "18",
        content: "¿Para qué mirar las estrellas pudiendo beberlas?",
        author: "Jordi Cordomí",
        tags: ["bebida", "humor"],
        length: 49
    },
    {
        _id: "19",
        content: "Ayer bebí como un abogado... hasta perder el juicio",
        author: "Jordi Cordomí",
        tags: ["alcohol", "humor"],
        length: 52
    },
    {
        _id: "20",
        content: "Haz el favor y quítame el aire de la copa",
        author: "Jordi Cordomí",
        tags: ["bebida", "humor"],
        length: 42
    },
    {
        _id: "21",
        content: "Tráeme un café y un cuchillo... que lo quiero cortao",
        author: "Jordi Cordomí",
        tags: ["café", "humor"],
        length: 54
    },
    {
        _id: "23",
        content: "Ponme un secreto ibérico pero shhh, no se lo digas a nadie",
        author: "Jordi Cordomí",
        tags: ["comida", "humor"],
        length: 59
    },
    {
        _id: "24",
        content: "Ponme una tarta al whisky, pero quítale la tarta",
        author: "Jordi Cordomí",
        tags: ["alcohol", "humor"],
        length: 49
    },
];

// GET /api/random - Frase aleatoria
app.get('/api/random', (req, res) => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.json(fraseAleatoria);
});

// GET /api/quotes - Todas las frases
app.get('/api/quotes', (req, res) => {
    res.json(frases);
});

// GET /api/quotes/:id - Frase por ID
app.get('/api/quotes/:id', (req, res) => {
    const frase = frases.find(f => f._id === req.params.id);
    if (frase) {
        res.json(frase);
    } else {
        res.status(404).json({ error: 'Frase no encontrada' });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'API de Frases de Voll-Dommí',
        endpoints: {
            random: '/api/random',
            all: '/api/quotes',
            byId: '/api/quotes/:id'
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 API corriendo en puerto ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
});