const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const { formatMessage } = require("./utils/utils")
const apiRoutes = require("./routers/app.routers");
const session = require('express-session');
const MongoStore = require('connect-mongo');





const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const users = [{name: "Fabian"}];


// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
    name: 'my-session',
    secret: 'top-secret-51',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://FG-Projects:Salerno2008@fg-cluster.byfsgny.mongodb.net/sessions?retryWrites=true&w=majority',
    }),
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 20000
    }
}));


app.set('views', './views');
app.set('view engine', 'ejs');


/* app.use("/api", apiRoutes); */

app.get('/', async (req, res) => {
    const user = await req.session.user;
    console.log("user home => ", req.session.user);
    if (user) {
        return res.sendFile(__dirname + 'profile.ejs', { sessionUser: user });
    }
    else {
        return res.sendFile(__dirname + '/public/login.html');
    }
});

app.get('/profile', async (req, res) => {
    const user = await req.session.user;
    console.log("user profile => ", req.session.user);
    res.render('profile.ejs', { sessionUser: user });
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    const user = users.find(user => user.name == name);
    if (!user) return res.redirect('/error');
    req.session.user = user.name;
    req.session.save((err) => {
        if (err) {
            console.log("Session error => ", err);
            return res.redirect('/error');
        }
        console.log("user login => ", req.session.user);
        res.redirect('/profile');
    });
});








httpServer.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});





/* io.on("connection", async (socket) => {
    console.log("Nuevo usuario conectado");
    const productos = await products.getAll()
    socket.emit("products", [...productos]);
    const mensajes = await messages.getAll()
    socket.emit("messages", mensajes);
    socket.on("new-product", async (data) => {
        const addProduct = await products.save(data)
        const productos = await products.getAll()
        io.emit("products", [...productos]);
    });
    socket.on("new-message", async (data) => {
        const newUser = {
            id: socket.id,
            username: data.user
        }
        users.push(newUser)
        const author = users.find(user => user.id === socket.id);
        const newMessage = formatMessage(socket.id, author.username, data.text);

        const { username, text, created_at } = newMessage
        await messages.save({ username, text, created_at })
        io.emit("chat-message", newMessage);
    });
}); */




