# 🏥 Medical Diagnostic Lab Website

A modern, responsive medical diagnostic laboratory website with test booking system, doctor profiles, and AI-powered chatbot support.

## ✨ Features

- 📊 **Test Booking System**: Easy online booking for lab tests
- 👨‍⚕️ **Doctor Profiles**: Detailed information about medical professionals
- 💬 **AI Chatbot**: 24/7 customer support via integrated chatbot
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🎨 **Modern UI/UX**: Clean, minimalistic design with smooth animations
- 🔒 **Secure**: Environment variables for sensitive data
- 📧 **Email Notifications**: Automated booking confirmations
- 🔍 **Test Search**: Quick search for available tests
- 📅 **Appointment Management**: Schedule and manage appointments
- 💳 **Online Payments**: Integrated payment gateway

## 🚀 Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Router v6
- Axios
- React Hook Form
- React Query

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT Authentication
- Nodemailer
- Socket.io (real-time chat)

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ctrlshiftcommit/demo-microsite.git
cd demo-microsite
```

2. Install dependencies:
```bash
npm run install-all
```

3. Set up environment variables:
```bash
# Copy the example env file
cp .env.example .env
cp client/.env.example client/.env
cp server/.env.example server/.env

# Edit the .env files with your actual values
```

4. Start the development servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
demo-microsite/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Utility functions
│   │   ├── types/        # TypeScript types
│   │   └── styles/       # Global styles
│   └── package.json
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   └── package.json
├── .env.example          # Environment variables example
├── .gitignore           # Git ignore file
├── package.json         # Root package.json
└── README.md           # This file
```

## 🎨 Features in Detail

### Test Booking System
- Browse available tests
- Filter by category, price, and availability
- Add multiple tests to cart
- Schedule sample collection
- Online payment integration
- Email confirmation

### Doctor Profiles
- Detailed doctor information
- Specializations and qualifications
- Experience and achievements
- Available consultation times
- Book appointments directly

### AI Chatbot
- 24/7 availability
- Answer common queries
- Test information
- Booking assistance
- Report status updates
- Webhook integration for dynamic responses

### Admin Dashboard
- Manage tests and packages
- Update doctor profiles
- View bookings and appointments
- Generate reports
- Manage user queries

## 🔧 Configuration

### Chatbot Webhook
The chatbot uses a webhook to fetch responses. Configure your webhook URL in the `.env` file:
```
CHATBOT_WEBHOOK_URL=https://your-chatbot-api.com/webhook
```

### Email Configuration
Set up email notifications using SMTP:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Using Docker
```bash
docker-compose up -d
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set environment variables
3. Deploy

## 📝 API Documentation

API documentation is available at `/api/docs` when running the server.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For support, email support@medicallab.com or use the in-app chatbot.

## 🙏 Acknowledgments

- Icons: Heroicons, Lucide React
- Animations: Framer Motion
- UI Components: Tailwind CSS

---

Made with ❤️ by Your Medical Lab Team