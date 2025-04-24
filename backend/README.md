# 📌 API de Marcadores - Backend
Este é o backend da aplicação Interactive Map, desenvolvido com FastAPI. Ele fornece endpoints RESTful para criação, leitura, atualização e exclusão de marcadores geográficos em um mapa interativo.

## ✅ Tecnologias Utilizadas
- [Python 3.10+](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [uvicorn](https://www.uvicorn.org/) (como servidor ASGI)
- CORS Middleware
- Pydantic
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

## ⚙️ Pré-requisitos
- Python 3.10 ou superior instalado na máquina
- Gerenciador de pacotes `pip` ou `pipenv`

## 📁 Acessando o Diretório do Projeto Backend
Abra o terminal e navegue até a pasta do `backend`:
```sh
cd backend
```

## 🛠️ Criando e Ativando o Ambiente Virtual
Crie um ambiente virtual para isolar as dependências do projeto:
```sh
python -m venv venv
```
Ative o ambiente:
- **Windows:**
  ```sh
  venv\Scripts\activate
  ```
- **Linux/macOS:**
  ```sh
  source venv/bin/activate
  ```

## 📦 Instalando Dependências
Instale os pacotes necessários:
```sh
pip install -r requirements.txt
```

## ▶️ Executando a Aplicação
Execute a API com:
```sh
uvicorn main:app --reload
```
Ou, se desejar especificar host e porta:
```sh
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
A aplicação estará disponível em:
👉 `http://127.0.0.1:8000/`

## 📚 Documentação da API
A documentação interativa (Swagger UI) estará disponível em:
👉 `http://127.0.0.1:8000/docs`

## 🌐 Configurando CORS
Se o front-end estiver hospedado em um domínio diferente, configure o CORS da seguinte forma:
1. Instale o pacote com suporte completo ao FastAPI:
   ```sh
   pip install fastapi[all]
   ```

2. No arquivo `main.py`, adicione o seguinte:
   ```python
   from fastapi import FastAPI
   from fastapi.middleware.cors import CORSMiddleware

   app = FastAPI()

   app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],  # Altere para um domínio específico, se necessário
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

✅ Para maior segurança, substitua `"*"` por `"http://localhost:3000"` ou outro domínio específico do front-end.

## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões, correções ou melhorias.
Sua contribuição será muito bem-vinda! 🚀

📎 Recursos Relacionados
[README principal do projeto](https://github.com/periclesmatos/interactive-map-fullstack/blob/main/README.md)
