# SonarQube Test Project

[![SonarQube Analysis](https://github.com/LuizFelipeAlvesMaia/sonar-test-project/actions/workflows/sonarqube.yml/badge.svg)](https://github.com/LuizFelipeAlvesMaia/sonar-test-project/actions/workflows/sonarqube.yml)
[![Tests](https://img.shields.io/badge/tests-48%20passing-brightgreen)](https://github.com/LuizFelipeAlvesMaia/sonar-test-project)
[![Coverage](https://img.shields.io/badge/coverage-77.5%25-green)](https://github.com/LuizFelipeAlvesMaia/sonar-test-project)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

A comprehensive demonstration project showcasing **Code Coverage** integration with **SonarQube** using **Jest** and **React Testing Library** in a Next.js application.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Testing Suite](#testing-suite)
- [Code Coverage Metrics](#code-coverage-metrics)
- [SonarQube Integration](#sonarqube-integration)
- [CI/CD Pipeline](#cicd-pipeline)
- [Development Guide](#development-guide)
- [Component Documentation](#component-documentation)
- [Utility Functions](#utility-functions)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project demonstrates best practices for implementing comprehensive code coverage in a modern Next.js application. It includes a complete testing infrastructure with Jest and React Testing Library, integrated with SonarQube for continuous code quality analysis.

### Built With

| Technology                | Version | Purpose               |
| ------------------------- | ------- | --------------------- |
| **Next.js**               | 16.0.10 | React framework       |
| **TypeScript**            | ^5      | Static typing         |
| **Jest**                  | 29.7.0  | Testing framework     |
| **React Testing Library** | 14.1.2  | Component testing     |
| **SonarQube**             | Latest  | Code quality analysis |
| **GitHub Actions**        | -       | CI/CD automation      |

---

## Key Features

✅ **Complete Test Infrastructure** - Jest configured for Next.js with TypeScript support  
✅ **High Code Coverage** - 77.5% overall, 90.9% on React components, 100% on utilities  
✅ **48 Unit Tests** - Comprehensive coverage of components and functions  
✅ **SonarQube Integration** - LCOV report generation for quality analysis  
✅ **CI/CD Pipeline** - Automated testing and reporting via GitHub Actions  
✅ **Professional Documentation** - Complete guides and best practices  
✅ **Interactive Demo** - Live components showcasing test patterns

---

## Quick Start

### Installation

```bash
# Navigate to the application directory
cd my-app

# Install dependencies
yarn install
```

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate coverage report
yarn test:coverage
```

### View Coverage Report

After running `yarn test:coverage`, open the HTML report:

```bash
# Windows PowerShell
Start-Process "coverage/lcov-report/index.html"

# macOS/Linux
open coverage/lcov-report/index.html
```

### Start Development Server

```bash
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
sonar-test-project/
├── .github/
│   └── workflows/
│       └── sonarqube.yml           # CI/CD pipeline configuration
├── my-app/                         # Next.js application
│   ├── app/                        # Next.js app directory
│   │   ├── page.tsx               # Main page with demo components
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   ├── components/                # React components
│   │   ├── Counter.tsx            # Interactive counter (100% coverage)
│   │   ├── Counter.test.tsx       # Counter tests (7 tests)
│   │   ├── ContactForm.tsx        # Form with validation (87% coverage)
│   │   ├── ContactForm.test.tsx   # Form tests (7 tests)
│   │   ├── UserCard.tsx           # User display card (100% coverage)
│   │   └── UserCard.test.tsx      # Card tests (5 tests)
│   ├── utils/                     # Utility functions
│   │   ├── helpers.ts             # Helper functions (100% coverage)
│   │   └── helpers.test.ts        # Helper tests (29 tests)
│   ├── coverage/                  # Coverage reports
│   │   ├── lcov.info             # LCOV format for SonarQube
│   │   └── lcov-report/          # HTML coverage report
│   ├── jest.config.js             # Jest configuration
│   ├── jest.setup.js              # Jest setup file
│   └── package.json               # Dependencies and scripts
├── sonar-project.properties       # SonarQube configuration
└── README.md                      # This file
```

---

## Testing Suite

### Overview

The project includes **48 comprehensive unit tests** organized across 4 test suites, all passing successfully.

### Test Distribution

#### React Components (19 tests)

| Component       | Tests | Coverage | Key Features                               |
| --------------- | ----- | -------- | ------------------------------------------ |
| **Counter**     | 7     | 100%     | Increment, decrement, reset functionality  |
| **ContactForm** | 7     | 87.87%   | Field validation, email format, submission |
| **UserCard**    | 5     | 100%     | Rendering, callbacks, conditional delete   |

#### Utility Functions (29 tests)

| Function                    | Tests | Description                             |
| --------------------------- | ----- | --------------------------------------- |
| `sum`, `multiply`, `divide` | 9     | Mathematical operations with edge cases |
| `formatCurrency`            | 3     | Brazilian Real (BRL) formatting         |
| `validateEmail`             | 5     | Email format validation with regex      |
| `capitalize`                | 4     | String capitalization                   |
| `isEven`                    | 4     | Even number checking                    |
| `filterByAge`               | 4     | Array filtering by age threshold        |

### Running Specific Tests

```bash
# Run tests for a specific file
yarn test Counter.test.tsx

# Run tests matching a pattern
yarn test --testNamePattern="Counter"

# Run with verbose output
yarn test --verbose

# Update snapshots
yarn test -u
```

---

## Code Coverage Metrics

### Current Coverage

```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   77.5  |   100    |  80.76  |  77.02  |
 components       |   90.9  |   100    |  92.3   |  90.24  |
  ContactForm.tsx |  87.87  |   100    |  85.71  |  87.87  | 41-44
  Counter.tsx     |   100   |   100    |   100   |   100   |
  UserCard.tsx    |   100   |   100    |   100   |   100   |
 utils            |   100   |   100    |   100   |   100   |
  helpers.ts      |   100   |   100    |   100   |   100   |
------------------|---------|----------|---------|---------|-------------------
```

### Coverage Goals

- **Statements**: > 80% ✅
- **Branches**: 100% ✅
- **Functions**: > 80% ✅
- **Lines**: > 77% ✅

### Excluded from Coverage

- Test files (`**/*.test.ts`, `**/*.test.tsx`)
- Configuration files (`**/*.config.js`, `**/*.config.ts`)
- Setup files (`jest.setup.js`)
- Build outputs (`.next/`, `node_modules/`)

---

## SonarQube Integration

### Configuration File

The `sonar-project.properties` file at the project root configures SonarQube analysis:

```properties
sonar.projectKey=sonar-test-project
sonar.sources=my-app/app,my-app/components,my-app/utils
sonar.tests=my-app
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx
sonar.javascript.lcov.reportPaths=my-app/coverage/lcov.info
sonar.coverage.exclusions=**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx,**/*.config.js,**/*.config.ts,**/jest.setup.js
```

### Required GitHub Secrets

Configure in **Settings → Secrets and variables → Actions**:

| Secret Name      | Description                    | How to Obtain                                      |
| ---------------- | ------------------------------ | -------------------------------------------------- |
| `SONAR_TOKEN`    | SonarQube authentication token | SonarQube → My Account → Security → Generate Token |
| `SONAR_HOST_URL` | SonarQube instance URL         | Example: `https://sonarqube.example.com`           |

**Note**: The workflow uses the built-in `GITHUB_TOKEN` for Pull Request decoration, so you don't need to create a separate PAT token.

### Pull Request Decoration

SonarQube can automatically comment on your Pull Requests with analysis results. This feature is **already configured** in this project.

#### What You'll See on PRs

When you open or update a Pull Request, SonarQube will:

✅ **Post a summary comment** with:

- Quality Gate status (Pass/Fail)
- New issues found
- Code coverage changes
- Code smells, bugs, and vulnerabilities
- Security hotspots

✅ **Inline comments** on specific lines where issues are detected

✅ **Check status** visible in the PR checks section

#### Prerequisites for PR Decoration

1. **SonarQube Server Configuration** (Admin required):

   - Go to **Administration → Configuration → General Settings → ALM Integrations → GitHub**
   - Add GitHub App or configure GitHub integration
   - Set up authentication between SonarQube and GitHub

2. **Repository Configuration**:

   - Ensure `SONAR_TOKEN` and `SONAR_HOST_URL` are set in GitHub Secrets
   - The workflow has `pull-requests: write` permission (already configured)

3. **SonarQube Project Settings**:
   - In SonarQube, go to **Project Settings → General Settings → Pull Requests**
   - Ensure "Decorate Pull Requests" is enabled

#### Testing PR Decoration

To test if PR decoration is working:

```bash
# Create a new branch
git checkout -b test/pr-decoration

# Make a small change (e.g., add a comment)
echo "// Test comment" >> my-app/components/Counter.tsx

# Commit and push
git add .
git commit -m "test: PR decoration"
git push origin test/pr-decoration

# Create a Pull Request on GitHub
# Wait for the workflow to complete
# Check for SonarQube comments on the PR
```

#### Troubleshooting PR Decoration

**Issue**: No SonarQube comments on PR

**Solutions**:

1. Verify GitHub integration in SonarQube Admin panel
2. Check that the workflow completed successfully
3. Ensure Quality Gate is configured in SonarQube project
4. Verify webhook is configured (if using webhook-based integration)

**Issue**: Permission denied errors

**Solutions**:

1. Verify workflow has `pull-requests: write` permission
2. Check that `GITHUB_TOKEN` has not been restricted in repository settings
3. Ensure branch protection rules aren't blocking the bot

**Issue**: Results not appearing immediately

**Note**: It may take 1-2 minutes after the workflow completes for SonarQube to process and post results.

### Local Analysis

If you have SonarScanner installed locally:

```bash
# From project root
sonar-scanner
```

### Documentation References

- [SonarQube JavaScript/TypeScript Coverage](https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/test-coverage/javascript-typescript-test-coverage/)
- [Jest Coverage Configuration](https://jestjs.io/docs/configuration#collectcoveragefrom-array)
- [Next.js Testing Documentation](https://nextjs.org/docs/app/building-your-application/testing/jest)

---

## CI/CD Pipeline

### GitHub Actions Workflow

The workflow at `.github/workflows/sonarqube.yml` automatically:

1. Checks out the repository
2. Installs dependencies
3. Runs tests with coverage
4. Uploads coverage reports to SonarQube

### Trigger Conditions

- ✅ Push to `main` branch
- ✅ Pull requests to `main` branch
- ✅ Manual workflow dispatch

### Workflow Steps

```yaml
- Checkout code (with full history for SonarQube)
- Install dependencies (yarn install)
- Run tests with coverage (yarn test:coverage)
- Analyze with SonarQube (SonarSource/sonarqube-scan-action@v7.0.0)
```

### Viewing Results

- **GitHub Actions**: Check the Actions tab for workflow runs
- **SonarQube Dashboard**: View detailed analysis on your SonarQube instance
- **Pull Request Comments**: See automated SonarQube analysis directly in PRs

#### Example PR Comment

When SonarQube analyzes your PR, you'll see a comment like this:

```
SonarQube Quality Gate: ✅ Passed

New Code:
• 0 Bugs
• 0 Vulnerabilities
• 0 Security Hotspots
• 2 Code Smells
• 85.7% Coverage on New Code
• 0.0% Duplication on New Code

Overall Code:
• Quality Gate: Passed
• Coverage: 77.5%
• Duplications: 0.0%
```

Plus inline comments on specific lines with issues detected.

---

## Development Guide

### Setting Up Your Environment

1. **Clone the repository**

   ```bash
   git clone https://github.com/LuizFelipeAlvesMaia/sonar-test-project.git
   cd sonar-test-project/my-app
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

### Development Workflow

1. **Write code** in `components/` or `utils/`
2. **Write tests** alongside your code
3. **Run tests** frequently with `yarn test:watch`
4. **Check coverage** with `yarn test:coverage`
5. **Commit changes** when tests pass
6. **Push to GitHub** to trigger CI/CD

### Best Practices

#### Testing

- Write tests before or alongside implementation (TDD)
- Aim for high coverage (>80%) on business logic
- Test edge cases and error conditions
- Use descriptive test names
- Keep tests isolated and independent

#### Code Quality

- Follow TypeScript strict mode
- Use ESLint for code linting
- Maintain consistent code style
- Document complex logic
- Keep functions small and focused

#### Git Workflow

- Create feature branches from `main`
- Write clear commit messages
- Keep pull requests focused
- Ensure all tests pass before merging

---

## Component Documentation

### Counter Component

**File**: `components/Counter.tsx`  
**Coverage**: 100%  
**Tests**: 7

Interactive counter component with increment, decrement, and reset functionality.

**Props**:

```typescript
interface CounterProps {
  initialValue?: number; // Default: 0
}
```

**Features**:

- Increment counter by 1
- Decrement counter by 1
- Reset counter to 0
- Support for negative values
- Customizable initial value

**Usage**:

```tsx
<Counter initialValue={5} />
```

**Test Coverage**:

- Initial value rendering
- Increment functionality
- Decrement functionality
- Reset functionality
- Multiple operations sequence
- Negative number handling

---

### ContactForm Component

**File**: `components/ContactForm.tsx`  
**Coverage**: 87.87%  
**Tests**: 7

Form component with comprehensive validation for name, email, and message fields.

**Features**:

- Real-time field validation
- Email format validation
- Required field checking
- Success message display
- Auto-reset after submission

**Validation Rules**:

- Name: Required, non-empty
- Email: Required, valid format (regex)
- Message: Required, non-empty

**Usage**:

```tsx
<ContactForm />
```

**Test Coverage**:

- Form rendering
- Individual field validation
- Email format validation
- Form submission with valid data
- Success message display
- Field value updates

---

### UserCard Component

**File**: `components/UserCard.tsx`  
**Coverage**: 100%  
**Tests**: 5

Display card for user information with optional delete functionality.

**Props**:

```typescript
interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
  onDelete?: (id: number) => void;
}
```

**Features**:

- User information display
- Conditional delete button
- Delete callback support

**Usage**:

```tsx
<UserCard
  user={{ id: 1, name: "John Doe", email: "john@example.com" }}
  onDelete={(id) => console.log(`Delete user ${id}`)}
/>
```

**Test Coverage**:

- User information rendering
- Delete button visibility
- Delete callback invocation
- Different user data handling

---

## Utility Functions

### Mathematical Operations

**File**: `utils/helpers.ts`

#### `sum(a: number, b: number): number`

Adds two numbers together.

```typescript
sum(2, 3); // Returns: 5
sum(-2, -3); // Returns: -5
```

#### `multiply(a: number, b: number): number`

Multiplies two numbers.

```typescript
multiply(3, 4); // Returns: 12
multiply(-2, 3); // Returns: -6
```

#### `divide(a: number, b: number): number`

Divides two numbers. Throws error if divisor is zero.

```typescript
divide(10, 2); // Returns: 5
divide(10, 0); // Throws: Error('Cannot divide by zero')
```

---

### String Utilities

#### `capitalize(text: string): string`

Capitalizes the first letter and lowercases the rest.

```typescript
capitalize("hello"); // Returns: 'Hello'
capitalize("HELLO"); // Returns: 'Hello'
```

#### `validateEmail(email: string): boolean`

Validates email format using regex.

```typescript
validateEmail("test@example.com"); // Returns: true
validateEmail("invalid-email"); // Returns: false
```

---

### Number Utilities

#### `isEven(num: number): boolean`

Checks if a number is even.

```typescript
isEven(4); // Returns: true
isEven(3); // Returns: false
isEven(-4); // Returns: true
```

#### `formatCurrency(value: number): string`

Formats a number as Brazilian Real (BRL) currency.

```typescript
formatCurrency(1234.56); // Returns: 'R$ 1.234,56'
formatCurrency(-100); // Returns: '-R$ 100,00'
```

---

### Array Utilities

#### `filterByAge(users: Array<{name: string, age: number}>, minAge: number)`

Filters an array of users by minimum age.

```typescript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
];
filterByAge(users, 18); // Returns: [{ name: 'Alice', age: 25 }]
```

---

## Configuration

### Jest Configuration

**File**: `my-app/jest.config.js`

Key configurations:

- **Test Environment**: `jest-environment-jsdom`
- **Setup File**: `jest.setup.js`
- **Module Name Mapper**: Alias `@/*` to root
- **Coverage Directory**: `coverage/`
- **Coverage Formats**: LCOV, text, HTML
- **Test Match Patterns**: `**/*.test.ts(x)`, `**/*.spec.ts(x)`

### TypeScript Configuration

**File**: `my-app/tsconfig.json`

Key configurations:

- **Target**: ES2017
- **JSX**: react-jsx
- **Module Resolution**: bundler
- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` mapped to `./`

### Package Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## Troubleshooting

### Tests Not Running

**Problem**: Jest fails to execute

**Solution**:

```bash
# Clear Jest cache
yarn test --clearCache

# Reinstall dependencies
rm -rf node_modules
yarn install
```

---

### Coverage Not Generating

**Problem**: No coverage report generated

**Solution**:

```bash
# Verify Jest configuration
cat jest.config.js

# Check if coverage directory exists
ls -la coverage/

# Run with verbose output
yarn test:coverage --verbose
```

---

### SonarQube Not Receiving Coverage

**Problem**: Coverage not appearing in SonarQube

**Solution**:

```bash
# Verify LCOV file exists
ls my-app/coverage/lcov.info

# Check SonarQube configuration
cat sonar-project.properties

# Verify GitHub secrets are set correctly
# Settings → Secrets → Actions
```

---

### Module Resolution Errors

**Problem**: Cannot find module '@/...'

**Solution**:

```bash
# Verify tsconfig.json paths configuration
# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

---

## Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork** the repository
2. **Clone** your fork
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Write** tests for your changes
6. **Ensure** all tests pass: `yarn test`
7. **Commit** your changes: `git commit -m 'Add amazing feature'`
8. **Push** to your branch: `git push origin feature/amazing-feature`
9. **Open** a Pull Request

### Pull Request Guidelines

- Provide a clear description of changes
- Reference related issues
- Ensure all tests pass
- Maintain or improve code coverage
- Follow existing code style
- Update documentation as needed

### Code Review Process

1. Automated checks must pass (tests, linting)
2. Maintainer review and feedback
3. Address review comments
4. Final approval and merge

---

## License

This project is an educational demonstration for code coverage and SonarQube integration.

---

## Resources

### Documentation

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [SonarQube JavaScript/TypeScript Coverage](https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/test-coverage/javascript-typescript-test-coverage/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Related Projects

- [Next.js](https://nextjs.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [SonarQube](https://www.sonarqube.org/)

---

## Acknowledgments

- Next.js team for the excellent framework
- Jest and Testing Library communities
- SonarSource for code quality tools
- All contributors to this project

---

**Built with ❤️ for demonstrating Code Coverage + SonarQube Integration**

_Last Updated: December 19, 2025_
