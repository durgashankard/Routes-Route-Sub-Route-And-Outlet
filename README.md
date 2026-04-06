# React + Vite


> ⚠️ **Note:** If you try this project, use password **"Admin"** to access the Home page.

---

## 🎬 Live Demo

👉 https://shopper-app-react-route-outlet.netlify.app/  


---


# 🛒 Shopper App (React Routing + JSON Server)

## 📌 Project Overview

This is a **React-based Shopping Application** that demonstrates:

* React Router (Routing, Nested Routes, Outlet)
* Dynamic Routing with Parameters
* JSON Server (Fake REST API)
* Axios for API Calls
* Login Navigation System

The application allows users to:

* Login
* View Categories
* View Products based on Category
* View Product Details

---

## 🚀 Features

✅ Login Authentication (Basic)

✅ Dynamic Category Listing

✅ Filter Products by Category

✅ Nested Routing using `<Outlet />`

✅ Product Details Page

✅ JSON Server Integration

✅ Clean UI using Bootstrap

---

## 🧠 Concepts Used

### 🔹 1. React Router DOM

* `BrowserRouter`
* `Routes` & `Route`
* `Link`
* `useNavigate`
* `useParams`
* `Outlet`

### 🔹 2. Nested Routing

Example:

```
/home/products/1
```

### 🔹 3. Dynamic Routing

```
/products/:catid
/details/:prodid
```

### 🔹 4. Outlet (Important Concept)

Used to render child routes inside parent component.

```jsx
<Outlet />
```

---

## 🔐 Login Flow

* Default Route → `/`
* User enters password
* If password = `Admin`
* Navigate to `/home`

```js
navigate('/home');
```

---

## 📁 Project Structure

```
src/
│
├── Shopping_Index.jsx     # Main Router Setup
├── Shopping_Login.jsx     # Login Page
├── Shopping_Home.jsx      # Category Page
├── Shopping_Products.jsx  # Products List
├── Shopping_Details.jsx   # Product Details
```

---

## 🔄 Routing Structure

```
/                  → Login Page
/home              → Categories
/home/products/1   → Products by Category
/products/1/details/1 → Product Details (nested)
```

---

## 🌐 API Setup (JSON Server)

### 📄 db.json

```json
{
  "categories": [
    { "CategoryId": 1, "Name": "Electronics" },
    { "CategoryId": 2, "Name": "Fashion" }
  ],
  "products": [
    { "id": 1, "Title": "Samsung TV", "Price": 34000, "Rating": 4.2, "CategoryId": 1 }
  ]
}
```

### ▶ Run JSON Server

```bash
npx json-server --watch db.json --port 3000
```

👉 API URLs:

* http://localhost:3000/categories
* http://localhost:3000/products

---

## 📦 Installation & Setup

```bash
npm create vite@latest
cd project-name
npm install
npm install axios react-router-dom formik
npm run dev
```

---

## 🔗 Navigation Flow

1. Login → `/`
2. Redirect → `/home`
3. Click Category → `/home/products/:catid`
4. Click Product → `/products/:catid/details/:prodid`

---

## ⚠️ Important Learnings

* Always use `<Outlet />` for nested routes
* Use `useParams()` for dynamic values
* Use relative paths for nested navigation
* Use absolute paths carefully

---

## 🛠️ Technologies Used

* React.js
* React Router DOM
* Axios
* JSON Server
* Bootstrap
* Formik

---

## 💡 Future Improvements

* Add Cart System 🛒
* Add Authentication (JWT)
* Add Search Functionality 🔍
* Add Product Images 🖼️
* Deploy on Vercel 🚀

---

## 👨‍💻 Author

**Durgashankar Dangi**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!

---
