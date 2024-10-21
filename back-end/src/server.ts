const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require("fs");

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./uploads";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const upload = multer({storage});

const port = process.env.port || 3001;

app.use("/images", express.static(path.join(__dirname, "images")));

app.get('/', (req, res) => {
    res.send("Servidor de imágenes funcionando");
});

app.post("/upload", upload.single("image"), (req, res) => {
if (!req.file) {
    return req.status(400).send("No se ha subido ninguna imagen")
}
res.send({
    message: "Imagen subida con éxito.",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
});
}
);

app.get('/images/', (req, res) => {
    const filePath = path.join(__dirname, "uploads", req.params.filename);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
        res.sendFile(filePath);
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

app.delete('images', (req, res) => {
    const filePath = path.join(__dirname, "uploads", req.params.filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.send({
            message: "Imagen eliminada con éxito"
        });
     } else {
        res.setatus(404).send("Imagen no encontrada");
     }
});

app.listen(port, ()=> {
    console.log('Servidor de imágenes corriendo en http://localhost:${port}');
});