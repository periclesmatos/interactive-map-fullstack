# 🌍 interactive Map - Fullstack
Este é um projeto fullstack que consiste em um mapa interativo para exibir e gerenciar marcadores personalizados. A aplicação foi construída com React no front-end e FastAPI no back-end, com foco em boas práticas de desenvolvimento, organização em camadas e consumo de API.

## 🚀 Objetivo do Projeto
Oferecer uma interface gráfica intuitiva onde o usuário pode:
- Visualizar marcadores em um mapa interativo (Google Maps);
- Adicionar novos marcadores com nome e localização;
- Editar e excluir marcadores existentes;
- Ter persistência de dados com uma API estruturada.

Este projeto simula uma aplicação real que poderia ser utilizada, por exemplo, para gestão de pontos de interesse, localização de ativos, ou organização de áreas urbanas.

## Tecnologias Utilizadas
### 💻 Front-end (pasta `/frontend`)
- [React.js](https://react.dev/)
- [Vite](https://vite.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/) (para gerenciamento de estado global)
- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript?hl=pt-br)
- [React Google Maps APi](https://www.npmjs.com/package/@react-google-maps/api)
- React Hooks: `useState`, `useEffect`
### 🐍 Back-end (pasta `/backend`)
- [FastAPI](https://fastapi.tiangolo.com/)
- [uvicorn](https://www.uvicorn.org/) (como servidor ASGI)
- CORS Middleware
- Modelo RESTful
- Tipagem com Pydantic
- Documentação com [Swagger UI](https://swagger.io/tools/swagger-ui/)

## 📂 Estrutura do Projeto
```perl
interactive-map-fullstack/
│
├── frontend/       # Aplicação React
│   └── README.md   # Instruções de execução do front
│
├── backend/        # API FastAPI
│   └── README.md   # Instruções de execução da API
│
└── README.md       # Este arquivo
```

## 📄 Como Rodar o Projeto
O repositório é dividido em duas partes independentes:

### 🔹 1. Backend
Acesse a pasta `/backend` e siga as instruções do [README backend](https://github.com/periclesmatos/interactive-map-fullstack/tree/main/backend#readme) para:
- Criar ambiente virtual;
- Instalar as dependências;
- Rodar a API FastAPI.

A API roda por padrão em `http://127.0.0.1:8000`.

### 🔹 2. Frontend
Acesse a pasta `/frontend` e siga o [README frontend](https://github.com/periclesmatos/interactive-map-fullstack/blob/main/frontend/README.md) para:
- Instalar as dependências com `npm`;
- Rodar a aplicação com `npm run dev`.

O front rodará por padrão em `http://localhost:3000`.

## 🔧 Funcionalidades Implementadas
- ✅ Listagem de marcadores (GET)
- ✅ Criação de novos marcadores (POST)
- ✅ Edição de marcadores (PUT)
- ✅ Remoção de marcadores (DELETE)
- ✅ Comunicação entre front-end e back-end
- ✅ Estado global com Zustand
- ✅ Estilização com CSS modules

## 💡 Aprendizados Demonstrados

Este projeto demonstra domínio sobre:
- Integração fullstack com consumo de APIs;
- Estruturação de projetos modernos com React e FastAPI;
- Boas práticas com React Hooks (useState, useEffect);
- Utilização de estado global com Zustand;
- Comunicação assíncrona com fetch e tratamento de erros;
- Uso da Google Maps API para renderização dinâmica;
- Organização de projeto para colaboração em equipe;
- Escrita de documentação técnica com Markdown.

## 🤝 Contribuições
Contribuições são bem-vindas! Caso tenha sugestões de melhorias ou encontre bugs, sinta-se à vontade para abrir uma issue ou fazer um pull request.

## 📬 Contato
Desenvolvido por Péricles Matos

🔗 [LinkedIn](https://www.linkedin.com/in/periclesm/)



