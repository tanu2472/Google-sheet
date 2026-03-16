#Contact Form to Google Sheets Integration
This project demonstrates how to connect a simple Contact Us form built with a frontend framework (React + Vite) to a Google Sheet using Google Apps Script or an API endpoint. When a user submits the form, the data is automatically logged into the spreadsheet.

🚀 Features
- Collects Name, Email, and Message from users.
- Submits data directly to a Google Sheet.
- Provides a clean and simple frontend form.
- Useful for lightweight CRM, feedback collection, or demo projects.

🛠️ Tech Stack
- Frontend: React + Vite
- Styling:  CSS 
- Backend/Integration: Google Apps Script (Web App endpoint)
- Database: Google Sheets

⚙️ Setup Instructions
- Clone the repository:
   git clone https://github.com/your-repo/contact-form-gsheets.git
  cd contact-form-gsheets
- Install dependencies:
  npm install
 - Run the project locally:
   npm run dev
- Create a Google Sheet with columns:
  Name | Email | Message
- Deploy a Google Apps Script Web App linked to the sheet to accept POST requests.
- Update your form’s fetch/axios endpoint with the deployed script URL.
📸 Demo Screenshot
Here’s how the integration looks in action:
