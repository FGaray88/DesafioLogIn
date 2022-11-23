const chatForm = document.getElementById("chat-form");
const formProducts = document.getElementById("form-products");
const inputTitle = document.getElementById("form-title");
const inputPrice = document.getElementById("form-price");
const inputDescripcion = document.getElementById("form-descripcion");
const inputThumbnail = document.getElementById("form-thumbnail");

const socket = io();


// chat

const renderMessage = (socketId, data) => {
    const div = document.createElement('div');
    let className;
    let html;
    if (data.id) {
        className = socketId === data.id
            ? 'my-messages-container'
            : 'other-messages-container';
        if (className === 'my-messages-container') {
            html = `<div class="my-messages">
            <span><b>Yo</b> ${data.created_at}</span><br />
            <span>${data.text}</span>
        </div>`;
        }
        else {
            html = `<div class="other-messages">
            <span><b>${data.username}</b> ${data.created_at}</span><br />
            <span>${data.text}</span>
        </div>`
        }
    }
    else {
        className = 'bot-messages';
        html = `<b>FG-Bot dice: </b><i>${data.text}</i>`;
    }
    div.classList.add(className);
    div.innerHTML = html;
    document.getElementById('divChat').appendChild(div);
};

const renderMessages = (data) => {
    const html = data.map((elem) => {
        let fragment = `
        <div class="other-messages-container">
            <div class="other-messages">
                <span><b>${elem.username}</b> ${elem.created_at}</span><br />
                <span>${elem.text}</span>
            </div>
        </div>`;
        return fragment;
    }).join('\n');
    document.getElementById('divChat').innerHTML = html;
};


chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const textInput = document.getElementById("text-input");
    const user = document.getElementById("user-input");
    const msg = {
        text: textInput.value,
        user: user.value
    }
    socket.emit("new-message", msg);
    textInput.value = "";
});

socket.on("chat-message", (data) => {
    renderMessage(socket.id, data);
});

socket.on("messages", (data) => {
    renderMessages(data);
});
// hasta aqui chat

// products

const renderProducts = (products) => {
    fetch("http://localhost:8080/products.hbs")
    .then((result) => result.text())
    .then((serverTemplate) => {
        const template = Handlebars.compile(serverTemplate);
        const html = template({ products });
        document.getElementById('divCentral').innerHTML = html;
    })
}
socket.on("products", (data) => {
    renderProducts(data)
});

formProducts.addEventListener("submit", (event) => {
    event.preventDefault();
    const newProduct = {
        name: inputTitle.value,
        thumbnail: inputThumbnail.value,
        description: inputDescripcion.value,
        price: +(inputPrice.value),
    };
    socket.emit("new-product", newProduct);
});







