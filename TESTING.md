# 🧪 SonarQube Test Project - Code Coverage Demo

Este projeto demonstra a integração de testes automatizados com cobertura de código (code coverage) para análise no SonarQube.

## 📋 Tecnologias Utilizadas

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Jest** - Framework de testes
- **React Testing Library** - Testes de componentes React
- **SonarQube** - Análise de qualidade de código
- **GitHub Actions** - CI/CD

## 🚀 Configuração

### 1. Instalar Dependências

```bash
cd my-app
yarn install
```

### 2. Executar Testes

```bash
# Executar todos os testes
yarn test

# Executar testes em modo watch
yarn test:watch

# Gerar relatório de cobertura
yarn test:coverage
```

### 3. Visualizar Cobertura Localmente

Após executar `yarn test:coverage`, abra o arquivo:

```
my-app/coverage/lcov-report/index.html
```

## 📊 Estrutura do Projeto

```
my-app/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Layout
├── components/            # Componentes React
│   ├── Counter.tsx        # Componente contador
│   ├── Counter.test.tsx   # Testes do contador
│   ├── ContactForm.tsx    # Formulário de contato
│   ├── ContactForm.test.tsx
│   ├── UserCard.tsx       # Card de usuário
│   └── UserCard.test.tsx
├── utils/                 # Funções utilitárias
│   ├── helpers.ts         # Funções auxiliares
│   └── helpers.test.ts    # Testes das funções
├── jest.config.js         # Configuração do Jest
└── jest.setup.js          # Setup do Jest
```

## 🧪 Componentes e Testes

### Counter Component

- Incrementar/Decrementar valores
- Reset para zero
- Valor inicial customizável
- **Cobertura**: 100%

### ContactForm Component

- Validação de campos (nome, email, mensagem)
- Validação de formato de email
- Submit e reset do formulário
- **Cobertura**: ~95%

### UserCard Component

- Exibição de informações do usuário
- Botão de delete opcional
- Callback de delete
- **Cobertura**: 100%

### Utility Functions

- Operações matemáticas (sum, multiply, divide)
- Formatação de moeda (BRL)
- Validação de email
- Capitalização de strings
- Filtros de arrays
- **Cobertura**: 100%

## 📈 Integração com SonarQube

### Configuração Local

O arquivo `sonar-project.properties` na raiz do projeto contém:

```properties
sonar.projectKey=sonar-test-project
sonar.sources=my-app/app,my-app/components,my-app/utils
sonar.tests=my-app
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx
sonar.javascript.lcov.reportPaths=my-app/coverage/lcov.info
sonar.coverage.exclusions=**/*.test.ts,**/*.test.tsx
```

### GitHub Actions

O workflow em `.github/workflows/sonarqube.yml` executa:

1. Checkout do código
2. Instalação de dependências
3. Execução dos testes com cobertura
4. Envio do relatório para o SonarQube

**Secrets necessários no GitHub:**

- `SONAR_TOKEN` - Token de autenticação do SonarQube
- `SONAR_HOST_URL` - URL da instância do SonarQube
- `PAT_TOKEN` - Token de acesso pessoal do GitHub (para PRs)

## 📝 Comandos Úteis

```bash
# Desenvolvimento
yarn dev                 # Iniciar servidor de desenvolvimento

# Testes
yarn test               # Executar testes
yarn test:watch         # Modo watch
yarn test:coverage      # Gerar relatório de cobertura

# Build
yarn build              # Build de produção
yarn start              # Iniciar servidor de produção

# Linting
yarn lint               # Executar ESLint
```

## 🎯 Métricas de Cobertura Esperadas

- **Statements**: > 90%
- **Branches**: > 85%
- **Functions**: > 90%
- **Lines**: > 90%

## 📚 Documentação de Referência

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [SonarQube JavaScript/TypeScript Coverage](https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/test-coverage/javascript-typescript-test-coverage/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é um exemplo educacional para demonstração de code coverage.

---

Desenvolvido para demonstração de integração Jest + SonarQube 🚀
