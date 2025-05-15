import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  try {
    const user = await prismaClient.user.create({
      data: {
        email: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    socket.send("You are connected successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    socket.send("Error creating user");
  }
});
