
# 🏥 Claims Management Platform 🚀

## 🌟 Overview

This is a comprehensive **Claims Management Platform** built with a modern tech stack: **Next.js, NestJS, MongoDB, TailwindCSS, and Material UI**.  It offers two distinct interfaces:

-   **Patient Portal**:  Easy claim submission and tracking.
-   **Insurer Portal**: Efficient claim review and management.

The platform boasts authentication, protected routes, seamless file uploads, and robust Role-Based Access Control (RBAC).

---

## 📹 Video Demonstration

Check out the demo video on YouTube: [https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID](https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID) (Replace with your actual video link)

---

## 💻 Tech Stack

| Layer       | Technology Used                 |
| ----------- | -------------------------------- |
| **Frontend**  | Next.js, TailwindCSS, Material UI |
| **Backend**   | NestJS (Node.js Framework)    |
| **Database**  | MongoDB (Mongoose ORM)        |
| **Auth**      | JWT Authentication + RBAC     |
| **File Upload** | Multer (Handled by NestJS API) |
| **UI Components** | Material UI |
| **Hosting** | Localhost (or cloud deployment) |

---

## ✨ Features

### **1️⃣ Patient Portal**

✅ **Submit a Claim**

*   A user-friendly form to enter:
    *   Name, Email, Claim Amount, Description
    *   Upload supporting documents (e.g., receipts, prescriptions)

    ![Submit Claim Form](https://i.imgur.com/YOUR_IMAGE_ID_HERE.png)  *(Replace with your actual screenshot link)*

✅ **View Claims**

*   Dashboard to track claim status (Pending, Approved, Rejected)
*   View submission date and approved amount

    ![Patient Claims Dashboard](https://i.imgur.com/YOUR_IMAGE_ID_HERE.png)  *(Replace with your actual screenshot link)*

### **2️⃣ Insurer Portal**

✅ **Claims Dashboard**

*   View all submitted claims at a glance
*   Filter claims by status, date, and claim amount

    ![Insurer Claims Dashboard](https://i.imgur.com/YOUR_IMAGE_ID_HERE.png)  *(Replace with your actual screenshot link)*

✅ **Manage Claims**

*   Review claim details and uploaded documents
*   Approve/Reject claims with comments and approved amounts

    ![Manage Claim Details](https://i.imgur.com/YOUR_IMAGE_ID_HERE.png)  *(Replace with your actual screenshot link)*

### **3️⃣ Shared Features**

✅ **Authentication & Authorization**

*   Secure login for both patients and insurers
*   Role-Based Access Control (RBAC) for restricted access

✅ **Protected Routes**

*   Users must authenticate before accessing dashboards

✅ **REST API Development**

*   Well-defined endpoints for submitting, fetching, and updating claims

✅ **Database Storage**

*   Stores all claim details with timestamps

---

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Gouri1504/claims-management-system.git
cd claims-management-system
```

---

### **2️⃣ Backend Setup (NestJS)**

#### **Navigate to Backend Directory**

```bash
cd backend
```

#### **Install Dependencies**

```bash
npm install
```

#### **Set Up Environment Variables**

Create a `.env` file and add the following:

```
MONGO_URI=mongodb://localhost:27017/claims-db
JWT_SECRET=your_secret_key
PORT=5000
```

#### **Run the Backend**

```bash
npm run start:dev
```

The API will be available at `http://localhost:5000/api`.

---

### **3️⃣ Frontend Setup (Next.js)**

#### **Navigate to Frontend Directory**

```bash
cd frontend
```

#### **Install Dependencies**

```bash
npm install
```

#### **Set Up Environment Variables**

Create a `.env.local` file and add:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

#### **Run the Frontend**

```bash
npm run dev
```

Visit `http://localhost:3000` to access the app.

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                     | Authentication Required |
| ------ | -------------------- | ------------------------------- | ----------------------- |
| POST   | `/auth/login`       | Authenticate user              | No                      |
| GET    | `/claims`           | Get all claims (Insurer only)  | Yes                     |
| GET    | `/claims/:id`       | Get claim details              | Yes                     |
| POST   | `/claims`           | Submit a new claim (Patient)   | Yes                     |
| PUT    | `/claims/:id`       | Update claim status (Insurer)  | Yes                     |
| GET | `/claims/file/:filename` | Download a claim file | Yes |

---

## 🔐 Authentication & Authorization

-   Users authenticate via **JWT tokens**.
-   Role-Based Access Control (RBAC) ensures:
    -   **Patients** can only submit and view their own claims.
    -   **Insurers** can view, approve, or reject claims.

---

## 🎨 UI Design

-   **TailwindCSS** for modern and responsive design.
-   **Material UI** for intuitive buttons, form inputs, and cards.
-   **Dark Mode Support** (Optional - implement if applicable).

---

## 🚀 Deployment (Optional)

### **1️⃣ Deploy Backend to Render/Vercel**

```bash
git push origin main
```

-   Use **Render** or **DigitalOcean** for backend hosting.

### **2️⃣ Deploy Frontend to Vercel**

```bash
vercel deploy
```

-   Use **Vercel** for frontend deployment.

---

## 🧪 API Testing Examples (Using HTTPie/cURL)

These examples are provided as Insomnia files in the repository!

**Variables:**

*   `{{url}}`  should be replaced with `http://localhost:5000/api`

**1. Register a User (Patient or Insurer)**

```http
POST {{url}}/auth/register
Content-Type: application/json

{
  "email": "patient@example.com",
  "password": "123456",
  "role": "patient"
}
```

**2. Login**

```http
POST {{url}}/auth/login
Content-Type: application/json

{
  "email": "patient@example.com",
  "password": "123456"
}
```

**3.  Submit a Claim (Patient)**

```http
POST {{url}}/claims
Authorization: Bearer <YOUR_JWT_TOKEN>
Content-Type: multipart/form-data; boundary=WebAppBoundary

--WebAppBoundary
Content-Disposition: form-data; name="name"

John Doe
--WebAppBoundary
Content-Disposition: form-data; name="email"

patient@example.com
--WebAppBoundary
Content-Disposition: form-data; name="claimAmount"

1000
--WebAppBoundary
Content-Disposition: form-data; name="description"

Claim for medical expenses
--WebAppBoundary
Content-Disposition: form-data; name="status"

Pending
--WebAppBoundary
Content-Disposition: form-data; name="file"; filename="receipt.pdf"
Content-Type: application/pdf

<@./receipt.pdf>  //Replace with your actual file path
--WebAppBoundary--
```

**4. Get Claims (Patient/Insurer)**

```http
GET {{url}}/claims
Authorization: Bearer <YOUR_JWT_TOKEN>
```

**5. Get Claim by ID**

```http
GET {{url}}/claims/67d40666c43e3284d08d31dd
Authorization: Bearer <YOUR_JWT_TOKEN>
```

**6. Update Claim (Insurer)**

```http
PUT {{url}}/claims/67d40666c43e3284d08d31dd
Authorization: Bearer <YOUR_JWT_TOKEN>
Content-Type: application/json

{
  "status": "Approved",
  "insurerComments": "Claim approved, payout scheduled.",
  "approvedAmount": 900
}
```

**7. Download File**

```http
GET {{url}}/claims/file/file-1741983766589-409870001.jpeg
Authorization: Bearer <YOUR_JWT_TOKEN>
```

---



## ✅ Deliverables

-   **GitHub Repository** containing:
    -   Backend (NestJS)
    -   Frontend (Next.js)
-   **Screenshots** embedded in this README.
-   **Demo Video** showcasing the functionality (link provided above).
-   **API testing Insomnia files**
-   **README** (this document) with comprehensive installation instructions.

---

