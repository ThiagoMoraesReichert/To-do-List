const app = require('./App')

const dotenv = require('dotenv').config() //esse .config() me permite usar todas as configurações que eu usei la no .env ^^

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`)) //"Ouvir", ficar rodando em determinado lugar | a parte do ()=> é uma callback para retornar algo