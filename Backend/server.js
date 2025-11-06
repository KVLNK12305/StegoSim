const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors'); // You might need to install this: pnpm add cors

const app = express();
app.use(cors()); // Allow frontend to connect from a different port (3000 vs 3001)

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow your Next.js frontend
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Send a welcome message immediately upon connection
  socket.emit('output', 'Connected to StegoSim Warden Server...\r\n$ ');

  // Listen for command input from frontend
  socket.on('input', (data) => {
    console.log('Received input:', data);
    // For now, just echo it back with a prefix so we know it came from the server
    socket.emit('output', `Warden says you typed: ${data}\r\n$ `);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = 3001; // Use a different port than standard Next.js (3000)
server.listen(PORT, () => {
  console.log(`Warden server running on port ${PORT}`);
});