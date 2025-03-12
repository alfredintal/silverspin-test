# SilverSpin QA Test

Welcome! I utilized a Playwright-based testing framework designed for automated testing using **Gherkin syntax** and **Cucumber-style BDD** for the feature files. 

---

## 📂 Repository Structure

| Path | Description |
|------|-------------|
| `/features` | **Contains Gherkin feature files** (`.feature`), which define the test scenarios in plain English. |
| `/playwright-report` | **Contains auto-generated test reports**. After each test execution, an `index.html` file and supporting assets are generated here for visual analysis of test runs. |
| `/tests` | Contains test scripts for the QA exam |
| `/pages` | Pages utilized in the POM approach |

### **Run the Tests**

To execute all feature tests:

```bash
npx playwright test
```

or if you are using a custom test command:

```bash
npm run test
```

---

### **View Test Reports**

- After tests run, a detailed **Playwright report** is generated in the `/playwright-report` directory.
- Open the `index.html` file to view the results in your browser:

```bash
npx playwright show-report
```

Or manually open:

```
/playwright-report/index.html
```

---

## 📊 Reports Overview

- **Interactive and visual reports** allow you to analyze each test run and steps.
- Reports include screenshots, error logs, and trace information for failed scenarios.

---

---

Let me know if you want a version with badges (like build status, Playwright, Node version), or more setup details!
