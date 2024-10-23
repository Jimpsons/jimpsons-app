# 🌐 ProphecyJimpsons: Predictive NFTs Platform 🚀

![GitHub repo size](https://img.shields.io/github/repo-size/ProphecyJimpsonsOrg/jimpsons-app?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/ProphecyJimpsonsOrg/jimpsons-app?style=flat-square) ![GitHub pull requests](https://img.shields.io/github/issues-pr/ProphecyJimpsonsOrg/jimpsons-app?style=flat-square)

Welcome to **ProphecyJimpsons**, the future of predictive NFTs! Our platform allows users to turn their predictions into tangible assets using NFTs, powered by the Solana blockchain and built with modern technologies.

## 📜 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [🛠️ Technologies Used](#️-technologies-used)
- [⚙️ Setup and Installation](#️-setup-and-installation)
- [💻 Coding Style](#-coding-style)
- [📂 Project Structure](#-project-structure)
- [📈 Features](#-features)
- [🌍 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

## 🚀 Project Overview

**ProphecyJimpsons** is an innovative platform that leverages blockchain technology to create NFTs based on users' predictions about real-world events. Each prediction is minted as an NFT, which can be traded and its value increases based on the accuracy of the prediction.

## 🛠️ Technologies Used

| **Technology**                                  | **Description**                                       |
| ----------------------------------------------- | ----------------------------------------------------- |
| [React](https://reactjs.org/)                   | Frontend framework for building UI 💻                 |
| [TypeScript](https://www.typescriptlang.org/)   | JavaScript with static typing 📝                      |
| [Vite](https://vitejs.dev/)                     | Fast build tool for modern web projects ⚡            |
| [Emotion](https://emotion.sh/docs/introduction) | CSS-in-JS library for styling 🎨                      |
| [Solana](https://solana.com/)                   | Blockchain platform for NFTs and fast transactions ⛓️ |
| [Node.js](https://nodejs.org/)                  | Backend JavaScript runtime environment 🌐             |
| [PostgreSQL](https://www.postgresql.org/)       | Relational database system 🗄️                         |

## ⚙️ Setup and Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js v14+ 🟢
- Git 📂
- PostgreSQL 🗄️

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ProphecyJimpsonsOrg/jimpsons-app.git
   cd jimpsons-app
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following:

   ```bash
   DATABASE_URL=<your-postgresql-url>
   SOLANA_API_KEY=<your-solana-api-key>
   ```

4. **Run the application**:

   ```bash
   yarn dev
   ```

5. **Navigate to**: [http://localhost:5173](http://localhost:5173)

## 💻 Coding Style

We follow strict coding standards to ensure consistency and readability throughout the project:

### JavaScript/TypeScript

- **TypeScript** for static typing and type safety.
- **ESLint** for linting.
- **Prettier** for code formatting.

### Style Guide

- **React Functional Components** with hooks 🎣
- **Component-driven development** (separate components for each UI piece) 🧩
- **Emotion** for styling components with `styled` and `css` utilities 🎨

### Code Example (Button Component):

```tsx
/** @jsxImportSource @emotion/react */
import { ButtonProps } from '../../types/buttonTypes';
import { buttonStyles } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'md',
  disabled = false,
  color = 'primary',
}) => {
  return (
    <button
      css={buttonStyles(size, color)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
```

## 📂 Project Structure

```
/project-root
├── /src
│   ├── /assets                    # Static assets (images, fonts, etc.)
│   ├── /components                # UI components
│   │   ├── /ui                    # UI elements like buttons, inputs, etc.
│   ├── /context                   # React context (e.g., WalletContext)
│   ├── /pages                     # Route-based page components
│   ├── /styles                    # Global styles and themes
│   ├── /types                     # TypeScript interfaces and types
│   └── /utils                     # Utility functions/helpers
├── package.json                   # Project dependencies
└── vite.config.ts                 # Vite configuration
```

## 📈 Features

- **Predictive NFTs**: Mint NFTs based on predictions 🎯
- **Automated Verification**: Smart contracts verify predictions and update NFT value based on real-world outcomes 📈
- **Fast Transactions**: Leveraging Solana for low-cost and fast transactions ⚡
- **Community-driven DAO** (coming soon): Govern the platform through community voting and decentralization 🌐

## 📄 Future Plan

- _Currently, we are in work in progress phase_
