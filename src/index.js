/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app")

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return newPrice;
}

//INTL
// 1 - Dar formato a fechas
// 2 . Dar formato a monedas



// web api

// Conectarnos al servidor
// Tambien se pueden usar promesas async/await, se veria de la siguiente manera:

/* 
async function fetchData() {
    const response = await fetch(url),
    data = await response.json(),
*/

window.fetch(`${baseUrl}/api/avo`)
// Procesar la respuesta, y convertirlo en JSON
.then(respuesta => respuesta.json())
// JSON -> Data -> Renderizan info browser
.then(responseJSON => {
    const todosLosElementos = []
    responseJSON.data.forEach(element => {

        // crear imagen
            const image = document.createElement('img')
            document.body.appendChild(image)

            //URL de la imagen
            image.src = `${baseUrl}${element.image}`;

        //crear titulo
            const title = document.createElement('h2')
            document.body.appendChild(title)
            title.textContent = element.name + " 🥑"
            // Darle estilos  a mis nodos
            // Forma 1:
            // title.style = "font-size: 2rem"
            // Forma 2:
            // title.style.fontSize = "3rem"
            // Forma 3:
            title.className = "MUY-GRANDE" // En css le damos estilo a esta clase
            // Forma 4:
            // title.className = "text-4xl text-green-700" // Usando Tailwind

        //crear precio
            const price = document.createElement('div')
            document.body.appendChild(price)
            price.textContent = formatPrice(element.price)

            const container = document.createElement('div')
            container.append(image, title, price)

            todosLosElementos.push(container)

    });

    appNode.append(...todosLosElementos)

});
