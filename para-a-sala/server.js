const app = require ("./src/app") // chamando o arquivo app

const PORT = 1313 // configurando a porta

app.listen(PORT,() =>{
    console.log(`E aí, to rodando na porta ${PORT}`)
})