<a id="top"></a>

<pre align="center">
███████╗████████╗██╗   ██╗███████╗███████╗███╗   ██╗████████╗    ██╗  ██╗██╗   ██╗██████╗ 
 ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝████╗  ██║╚══██╔══╝    ██║  ██║██║   ██║██╔══██╗ 
███████╗   ██║   ██║   ██║██║  ██║█████╗  ██╔██╗ ██║   ██║       ███████║██║   ██║██████╔╝
 ╚════██║   ██║   ██║   ██║██║  ██║██╔══╝  ██║╚██╗██║   ██║       ██║  ██║██║   ██║██╔══██╗ 
 ███████║   ██║   ╚██████╔╝██████╔╝███████╗██║ ╚████║   ██║       ██║  ██║╚██████╔╝██████╔╝ 
 ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═   ╚═╝ ╚═════╝ ╚═════╝  

</pre>

<p align="center">
  <img src="https://img.shields.io/github/forks/iiitl/student-hub?style=social" />
  <img src="https://img.shields.io/github/stars/iiitl/student-hub?style=social" />
  <img src="https://img.shields.io/github/contributors/iiitl/student-hub" />
  <img src="https://img.shields.io/github/issues/iiitl/student-hub" />
  <img src="https://img.shields.io/github/issues-pr/iiitl/student-hub" />
  <img src="https://img.shields.io/github/license/iiitl/student-hub" />
</p>

_A Next.js-based student community platform for discussions, resources, and collaboration._

### **🚀 Overview**

Student Hub is a **modern platform** designed to help students **collaborate, share resources, and engage in discussions** seamlessly. Built with **Next.js, Tailwind CSS, and MongoDB**, it ensures a smooth and fast user experience while offering powerful community features such as study materials, question papers, a student marketplace, and a real-time community chat – all in one place! 🚀

🌟 If you find this project helpful, don't forget to star ⭐ the repository and support the community!

---

# 📌 Table of Contents

- [🚀 Overview](#-overview)
- [✨ Features](#-features)
  - [📚 Notes & Study Materials](#-notes--study-materials)
  - [📖 Quick Reads](#-quick-reads)
  - [📄 Question Papers Repository](#-question-papers-repository)
  - [🛒 Student Marketplace](#-student-marketplace)
  - [💬 Community Chat](#-community-chat)
  - [👨‍👩‍👧 Newcomers Section](#-newcomers-section)
- [🛠 Tech Stack](#-tech-stack)
- [📌 Getting Started](#-getting-started)
  - [💻 Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
    - [1️⃣ Fork & Clone the Repository](#1%EF%B8%8F%E2%83%A3-fork--clone-the-repository)
    - [2️⃣ Install Dependencies](#2%EF%B8%8F%E2%83%A3-install-dependencies)
    - [3️⃣ Setup Environment Variables](#3%EF%B8%8F%E2%83%A3-setup-environment-variables)
    - [4️⃣ Run the Development Server](#4%EF%B8%8F%E2%83%A3-run-the-development-server)
- [📁 Project Structure](#-project-structure)
- [⭐ Support & Community](#-support--community)
- [🚀 Ready to Contribute?](#-ready-to-contribute)

---

## ✨ Features

### 📚 Notes & Study Materials

- A centralized repository of well-organized notes and study resources for various subjects.
- Categorized by topics, subjects, and semesters to make searching easy.
- Users can contribute and share their own notes and resources.
- Markdown-supported formatting for structured reading.

### 📖 Quick Reads

- A collection of short, insightful articles and guides for students.
- Covers topics like study tips, productivity hacks, career guidance, and academic strategies.
- Regularly updated with fresh content.
- Mobile-friendly reading experience.

### 📄 Question Papers Repository

- A library of previous years’ question papers for different courses and subjects.
- Helps students prepare for exams by providing real past paper formats.
- Users can upload and share question papers with the community.
- Search and filter options to find relevant papers easily.

### 🛒 Student Marketplace

- A student-to-student platform for buying, selling, and exchanging academic resources.
- Users can list books, notes, and study materials for sale or donation.
- Secure communication between buyers and sellers.
- Categories for textbooks, lab manuals, stationery, and digital resources.

### 💬 Community Chat

- Real-time discussion forums for students to interact, ask doubts, and collaborate.
- Separate channels for different subjects and discussion topics.
- Anonymous question-asking feature for students hesitant to post publicly.
- Moderated by community admins to maintain quality discussions.

### 👨‍👩‍👧 Newcomers Section

- A dedicated space for new students to navigate their college journey.
- Includes a "New Student Guide" with essential information about courses, exams, and resources.
- FAQs addressing common concerns of first-year students.
- Links to useful university resources and academic calendars.

## **🛠 Tech Stack**

| **Category**          | **Technology Used**                      |
| --------------------- | ---------------------------------------- |
| **Framework**         | Next.js 15.2.2 (Turbopack enabled)       |
| **UI Library**        | Tailwind CSS 4, Radix UI                 |
| **Database**          | MongoDB with Mongoose ORM                |
| **Frontend**          | React 19, Next.js API Routes             |
| **Icons**             | Lucide Icons, React Icons                |
| **Styling Utilities** | Tailwind Merge, Class Variance Authority |
| **State Management**  | React Hooks, Context API (if applicable) |

---

## **📌 Getting Started**

### **💻 Prerequisites**

Before you begin, ensure you have the following installed:  
✔ **Git**  
✔ **Node.js** (Recommended: v18.x or later)  
✔ **npm** (Comes with Node.js)

---

### **⚙️ Installation**

#### **1️⃣ Fork & Clone the Repository**

- Navigate to the project repository on GitHub
- Click the "Fork" button in the top-right corner of the page
- This creates a copy of the repository in your GitHub account
- Choose your personal account as the destination for the fork

```bash
git clone https://github.com/<your-username>/student-hub.git
cd student-hub
```

#### **2️⃣ Install Dependencies**

```bash
npm install
```

#### **3️⃣ Setup Environment Variables**

Create a `.env.local` file in the root directory and add the following variables:

```plaintext
MONGO_URI=""
```

#### **4️⃣ Run the Development Server**

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

#### **To Run the lint file:**

```bash
npm run lint
```

---

## **📁 Project Structure**

```plaintext
student-hub/
│── public/             # Static assets (logos, icons, etc.)
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js page routes
│   ├── styles/         # Global Tailwind CSS styles
│   ├── utils/          # Helper functions
│   ├── hooks/          # Custom React hooks
│── .env.local          # Environment variables
│── package.json        # Project dependencies & scripts
│── tailwind.config.js  # Tailwind CSS configuration
│── next.config.js      # Next.js configuration
```

---

## **⭐ Support & Community**

- **Have an idea or suggestion?** Open an issue!
- **Found a bug?** Report it in [GitHub Issues](https://github.com/iiitl/student-hub/issues).
- **Like the project?** ⭐ Star the repository to support us!

---

## 👥 Contributors

We appreciate all contributions to Student Hub!

<p align="center">
  <a href="https://github.com/iiitl/student-hub/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=iiitl/student-hub" />
  </a>
</p>
Want to see your name here? Start contributing today! 🚀  
---

### **🚀 Ready to Contribute?**

Check out **[CONTRIBUTION.md](CONTRIBUTION.md)** and start coding!

---

<p align="center">
  <a href="#top">
    <img src="https://img.shields.io/badge/%E2%AC%86-Back%20to%20Top-blue?style=for-the-badge" alt="Back to Top"/>
  </a>
</p>
