# 🚀 Flugo Forms

Sistema web para **gestão e cadastro de colaboradores**, desenvolvido com **React + TypeScript**, utilizando **Firebase Firestore** como banco de dados e interface moderna baseada em **Material UI**.

O projeto permite:

- Visualizar colaboradores cadastrados
- Criar novos colaboradores através de um **formulário multi-step**
- Armazenar dados em **Cloud Firestore**
- Exibir os colaboradores em um **dashboard com ordenação**
- Interface inspirada no design do **Figma fornecido**

---

# 🌐 Demonstração

Aplicação hospedada na Vercel:

https://flugo-forms.vercel.app

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React
- TypeScript
- Vite
- Material UI

## Backend / Banco de Dados

- Firebase
- Cloud Firestore

## Deploy

- Vercel

---

# 📂 Estrutura do Projeto

flugo-colaboradores  
│  
├── src  
│   ├── assets  
│   │   ├── perfis (imagens aleatórias)  
│   │   └── logo  
│   │  
│   ├── components  
│   │   ├── steps  
│   │   │   ├── StepDadosPessoais.tsx  
│   │   │   ├── StepDadosProfissionais.tsx  
│   │   │   └── StepConfirmacao.tsx  
│   │   │  
│   │   ├── MultiStepForm.tsx  
│   │   ├── CadastroLayout.tsx  
│   │   └── DashboardColaboradores.tsx  
│   │  
│   ├── firebase  
│   │   └── firebaseConfig.ts  
│   │  
│   ├── pages  
│   │   └── ColaboradorPage.tsx  
│   │  
│   ├── types  
│   │   └── Colaborador.ts  
│   │  
│   ├── utils  
│   │   ├── getRandomProfileImage.ts  
│   │   └── profileImages.ts  
│   │  
│   ├── App.tsx  
│   └── main.tsx  
│  
└── README.md  

---

# ⚙️ Funcionalidades

## 📊 Dashboard de Colaboradores

- Lista colaboradores cadastrados
- Ordenação por:
  - Nome
  - Email
  - Departamento
  - Status
- Avatar gerado automaticamente
- Avatar aleatório baseado em imagens locais

---

## 🧾 Cadastro de Colaboradores

Cadastro dividido em **3 etapas**:

1️⃣ Informações Básicas  
2️⃣ Informações Profissionais  
3️⃣ Confirmação  

Fluxo da aplicação:

Dashboard  
↓  
Novo Colaborador  
↓  
Step 1  
↓  
Step 2  
↓  
Confirmação  
↓  
Salvar no Firebase  
↓  
Volta para Dashboard  

---

# ✔️ Validações Implementadas

## Nome

- Primeira letra maiúscula obrigatória

Exemplo válido:

João Silva  
Maria Oliveira  

Exemplo inválido:

joão  
maria  

---

## Email

Deve conter:

- @
- domínio válido

Exemplo:

usuario@gmail.com  
usuario@outlook.com  
usuario@hotmail.com  

---

## Telefone

Aceita apenas **números**.

Formatação automática:

(xx) xxxxx-xxxx  

Exemplo:

(44) 99123-4567  

---

# 👤 Avatar Aleatório

Cada colaborador recebe uma imagem automaticamente.

Arquivos utilizados:

mulher1.png  
mulher2.png  
...  
mulher7.png  

homem1.png  
homem2.png  
...  
homem7.png  

Seleção feita de forma **aleatória no frontend**.

---

# 🔥 Firebase

Banco utilizado:

**Cloud Firestore**

Estrutura da coleção:

colaboradores  
└── id_auto  
    ├── nome  
    ├── email  
    ├── telefone  
    ├── departamento  
    ├── cargo  
    ├── dataAdmissao  
    └── ativo  

---

# 🔑 Variáveis de Ambiente

Criar um arquivo `.env` na raiz do projeto:

VITE_FIREBASE_API_KEY=  
VITE_FIREBASE_AUTH_DOMAIN=  
VITE_FIREBASE_PROJECT_ID=  
VITE_FIREBASE_STORAGE_BUCKET=  
VITE_FIREBASE_MESSAGING_SENDER_ID=  
VITE_FIREBASE_APP_ID=  
VITE_FIREBASE_MEASUREMENT_ID=  

Essas informações podem ser encontradas no **console do Firebase**.

---

# 📦 Instalação

Clone o repositório:
git clone https://github.com/LipeProgramer/Flugo-Forms.git  

Entre na pasta do projeto:
cd flugo-colaboradores  

Instale as dependências:
npm install  

Execute o projeto:
npm run dev  

Abra no navegador:
http://localhost:5173  

---

# 🚀 Deploy

O deploy da aplicação foi realizado utilizando **Vercel**.

Passos para deploy:

1. Conectar o repositório GitHub na Vercel  
2. Importar o projeto  
3. Configurar as variáveis de ambiente  
4. Executar o deploy automático  

---

# 🔮 Melhorias Futuras

- Edição de colaboradores
- Exclusão de colaboradores
- Filtro por departamento
- Paginação da tabela
- Upload de foto do colaborador
- Autenticação de usuários

---

# 👨‍💻 Autor

**Felipe Nadab Goldberg Barbosa**

GitHub:  
https://github.com/LipeProgramer

Projeto desenvolvido para estudo e demonstração de habilidades em **React, TypeScript, Firebase e arquitetura frontend moderna**.