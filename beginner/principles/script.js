const root = document.getElementById('root');

const titulo = React.createElement("h1", { id: "title" }, "Hello World");
// const subtitulo = React.createElement("h2", { id: "subtitle" }, "Subtitle");

// const post = React.createElement("div", null, titulo, subtitulo)

ReactDOM.render(titulo, root);