import express, { json } from "express";
import Users from "./controllers/users";

const app = express();

app.use(json());

app.get("/users", Users.getAll);
app.post("/users", Users.create);
app.patch("/users", Users.update);
app.delete("/users", Users.delete);

export default app;
