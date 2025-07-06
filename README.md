## Project 2: **Expense Tracker 2.0 (Vanilla JS + TailwindCSS)**

### Project Goal:

Build a clean, interactive, persistent expense tracker with **Tailwind for layout**, **JavaScript for logic**, and **localStorage** for saving transactions across sessions.

---

View live project at: [https://molo-m.github.io/Expense-Tracker/](https://molo-m.github.io/Expense-Tracker/)

---

## 🧩 Core Features

### ➕ Add Expense

* Fields:

  * **Title** (e.g. “Groceries”)
  * **Amount** (positive number)
  * **Date** (default to today)

### 📃 Expense List

* Each transaction displayed with:

  * Title, amount, date
  * A delete (`×`) button

### 📊 Summary

* Show **total expenses**
* Optional: Show summary by **day / month**

### 🧠 Persistent Storage

* Save all data to `localStorage`
* On page reload, app restores previous state

---

## 💾 Data Structure (in JS)

Each expense can be stored as:

```js
{
  title: 'Internet',
  amount: 25000,
  date: '2025-06-16'
}
```

---

## ✅ Recommended Build Steps

### 📅 **DAY 1** – Build & Style the Form

* Title input
* Amount input
* Date input (default to today)
* Tailwind styling
* On submit: validate and push to `expenses[]` array

---

### 📅 **DAY 2** – Render Expense List

* Loop through `expenses[]` and display in DOM
* Each row should:

  * Show title, amount, date
  * Have a delete button

Use Tailwind to create nice "card" or row layouts.

---

### 📅 **DAY 3** – Implement Deletion & Summary

* Delete: remove expense from array + re-render
* Summary: sum all amounts and show below list
* Use `.reduce()` for total calculation

---

### 📅 **DAY 5** – Polish, Refactor, Deploy

* Separate logic into functions
* Clean up Tailwind classes with `@apply` or grouping
* Optional: add filtering UI
* Push to GitHub
* Deploy to Netlify (or Vercel)

---

## 📋 Project Checklist

* [ ] Add Expense form works with validation
* [ ] Expenses displayed dynamically
* [ ] Delete functionality works
* [ ] Total is accurate and updates live
* [ ] Fully responsive and styled with Tailwind
* [ ] GitHub repo with README
* [ ] Live deployment

