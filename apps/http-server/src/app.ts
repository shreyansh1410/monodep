import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prismaClient.user.create({
      data: {
        email: username,
        password,
      },
    });
    res.json({ msg: "Signed Up", id: user.id });
  } catch (err) {
    console.error("error signing up", err);
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
