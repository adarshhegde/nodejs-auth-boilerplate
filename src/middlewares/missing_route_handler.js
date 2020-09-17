const styles = 
`font-family:consolas;
text-align:center;
display:flex; 
width: 100vw;
height: 100vh;
justify-content:center;
align-items: center;
font-size:20pt;
margin: 0;`;

module.exports = (req, res) => {
    return res
    .status(404)
    .send(`<body style="${styles}">You seem to be lost.🥺👉👈</body>`);
}

