````markdown
# Salesforce Analytics Dashboard

A beginner-friendly Salesforce CRM Analytics Dashboard project built using Apex, Lightning Web Components (LWC), SOQL, and Chart.js.

This project was created as part of hands-on Salesforce learning to understand real-world dashboard development and Salesforce frontend-backend integration.

---

## Features

- Opportunity Pipeline Dashboard
- Total Pipeline Value Calculation
- Opportunity Count by Stage
- Interactive Bar Chart using Chart.js
- Apex Controller with SOQL Aggregation
- Lightning Web Components (LWC)
- Salesforce Static Resource Integration
- Responsive Dashboard UI

---

## Technologies Used

- Salesforce DX
- Apex
- Lightning Web Components (LWC)
- SOQL
- Chart.js
- VS Code
- Git & GitHub

---

## Project Structure

```text
force-app/main/default/
│
├── classes/
│   ├── DashboardController.cls
│   └── DashboardControllerTest.cls
│
├── lwc/
│   └── dashboardAnalysis/
│       ├── dashboardAnalysis.html
│       ├── dashboardAnalysis.js
│       └── dashboardAnalysis.js-meta.xml
│
└── staticresources/
    └── chartjs
````

---

## Dashboard Functionalities

### Total Pipeline Value

Displays total opportunity amount from Salesforce opportunities.

### Opportunity Stage Analysis

Shows opportunity count grouped by sales stage.

### Interactive Charts

Uses Chart.js for dynamic chart visualization.

---

## Sample Salesforce Concepts Covered

* Apex @AuraEnabled methods
* Aggregate SOQL Queries
* LWC Lifecycle Hooks
* Wire Service
* Static Resource Loading
* Component Rendering
* Salesforce Metadata Deployment

---

## Learning Purpose

This is a sample learning project created to practice:

* Salesforce Development
* Apex Programming
* LWC Development
* CRM Analytics Visualization
* GitHub Version Control

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/shyamsj72/salesforce-analytics-dashboard.git
```

### 2. Authorize Salesforce Org

```bash
sf org login web
```

### 3. Deploy Source

```bash
sf project deploy start
```

### 4. Upload Chart.js Static Resource

* Download Chart.js
* Go to Salesforce Setup → Static Resources
* Upload file with name:

```text
chartjs
```

---

## Author

Shyamjith

GitHub:
[https://github.com/shyamsj72](https://github.com/shyamsj72)

---

## Disclaimer

This project is built for learning and practice purposes only.

```
```
