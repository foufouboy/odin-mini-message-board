
require("dotenv").config();
const { Client } = require("pg");
const messages = [
    {
        text: "Hi there!",
        user: "Armando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
    {
        text: "Grrrrah. Grrraaaah, graaaah! (Hi. I'm a Gyarados.)",
        user: "Gyarados",
        added: new Date(),
    },
    {
        text: "I'll be the pirate king!!",
        user: "Monkey D. Luffy",
        added: new Date(),
    },
    {
        text: "See ya space cowboy.",
        user: "Spike Spiegel",
        added: new Date(),
    }
];

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(50), 
        message VARCHAR(500),
        added DATE NOT NULL DEFAULT CURRENT_DATE
    );

    INSERT INTO messages (username, message) 
    VALUES 
        ('foufouboy', 'Hello, Mini-message-board!'),
        ('Spike Spiegel', 'See ya space cowboy'), 
        ('Solal', 'Ainsi suis-je, mon ami, gracieux avec les gracieux, mais rugissant avec les rugissants et lion avec les hyènes !'), 
        ('Luke Skywalker', 'Noooooooo!'),
        ('Gyarados', 'Graaaaaah!'),
        ('Monkey D. Luffy', 'I''ll be the next pirate king!');

`;

async function main() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL 
    });

    console.log("connection...");
    await client.connect();
    console.log("connection ok!");
    console.log("inserting data...");
    await client.query(SQL);
    console.log("inserting data ok!");
    console.log("closing connection...");
    await client.end();
    console.log("closing connection ok!");
}

main();

