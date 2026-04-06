# Web-Socket

A minimal real-time room-based chat app built with **Node.js**, **Express**, and **Socket.IO**.

## Project Overview

This repository contains a single-server, single-page chat application:

- Backend serves `index.html` and manages Socket.IO connections.
- Users join a room and exchange real-time messages.
- Frontend includes a modern chat UI with local message echo and keyboard shortcuts.

## Repository Structure

```text
Web-Socket/
├── index.js          # Express + Socket.IO server
├── index.html        # Chat UI and client-side socket logic
├── package.json      # Dependencies
└── package-lock.json # Lockfile
```

## Tech Stack

- **express** `^5.1.0`
- **socket.io** `^4.8.1`
- Plain HTML/CSS/JavaScript for the client

## How It Works

### Server (`index.js`)

- Creates an Express app.
- Serves `index.html` at `/`.
- Starts a Socket.IO server on port `3000`.
- Handles:
  - `join-room`: joins a socket to a room.
  - `message`: forwards message to other users in the same room via `new-message`.

### Client (`index.html`)

- Connects to server with `io()`.
- Lets user join a room by room number.
- Sends messages with:
  - Send button
  - `Enter` key (send)
  - `Shift+Enter` (newline)
  - `Ctrl/Cmd + Enter` (send)
- Renders sent and received message bubbles with timestamps.

## Setup & Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node index.js
   ```

3. Open:

   ```text
   http://localhost:3000
   ```

4. Use two browser tabs/windows, join the same room, and exchange messages.

## Current Notes

- `package.json` currently defines dependencies only (no npm scripts).
- The server is intended to run on port `3000`.

