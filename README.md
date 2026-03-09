Markdown
# 🏢 Rental Manager - Smart Property Management Solution

**Rental Manager** is a modern, mobile-responsive web application designed to simplify rent collection and record-keeping for property owners. It utilizes **Google Sheets** as a secure cloud database and features automated **WhatsApp** invoicing.

---

## 📸 Project Interface
Explore the application's interface below:

![App Dashboard](./assets/Screenshot 2026-03-09 224332.png)
![Invoice Preview](./assets/Screenshot 2026-03-09 225501.png)
*(Note: Ensure your image files in the `assets/` folder match the filenames above, e.g., `screenshot1.png`)*

---

## ✨ Key Features

- 📝 **Tenant Management:** Effortlessly register new residents with their unit details and contact information.
- 💰 **Automated Billing:** Automatically calculates total bills by combining base rent and utility charges.
- 📲 **WhatsApp Integration:** Generate and send professional digital receipts to tenants via WhatsApp with a single click (Optimized for Bangladesh country codes).
- 📊 **Financial Analytics:** A real-time dashboard displaying collected rent, outstanding dues, and monthly revenue progress.
- 📱 **Modern UI:** Features a sleek "Glassmorphism" design, optimized for mobile-first usage to provide an app-like experience.
- 🔒 **Cloud Storage:** All data is synced directly to your personal Google Sheet, ensuring you own and control your data.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Variables & Backdrop Filters), JavaScript (ES6)
- **Backend:** Google Apps Script (GAS)
- **Database:** Google Sheets API
- **Communication:** WhatsApp Business API (URL-based integration)

---

## ⚙️ Installation & Setup Guide

Follow these steps to deploy your own instance of the Rental Manager:

### 1. Prepare the Google Sheet
- Create a new Google Sheet and add two tabs: `Tenants` and `Logs`.
- **Tenants Tab Headers:** `Name, Unit, Fixed Rent, Fixed Utility, Mobile, Date`
- **Logs Tab Headers:** `Type, Name, Unit, Total Bill, Paid, Due, Date, Month, Mobile`

### 2. Backend Deployment
- Open your sheet and go to **Extensions > Apps Script**.
- Paste your Google Apps Script code and click **Deploy > New Deployment**.
- Set the access to **"Anyone"**.
- Copy the generated **Web App URL**.

### 3. Update the Frontend
- Open `index.html` in your code editor (e.g., VS Code).
- Find the `scriptURL` variable and paste your Web App URL:
  ```javascript
  const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
🚀 Usage Instructions
Registration: Navigate to the "Tenants" tab to register your residents.

Payments: In the "Rent" tab, select a resident's name. Data will auto-fill. Click "Save" to log the payment.

Receipts: After saving, use the 'WhatsApp Receipt' button to notify the tenant instantly.

Monitoring: Visit the "Summary" tab to track your monthly financial health.

🤝 Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch

Commit your Changes

Push to the Branch

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

Developed with ❤️ by Shah Merajur Rahman


### Final Checklist for GitHub:
1. **Filename:** Save this exactly as `README.md`.
2. **Assets:** Ensure your `assets` folder contains the images and that the extensions (like `.png` or `.jpg`) match the code exactly.
3. **Privacy:** Before you `git push`, make sure the `scriptURL` in your `index.html` is replaced with the placeholder `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"`.
