// README.md
# 📝 Responsive ToDo App — React + Vite + Material UI

A beautifully designed, fully responsive ToDo application built using **React 19**, **Vite**, and **Material UI v7**. This project showcases clean architecture, modern UI/UX practices, and a focus on performance and usability — perfect for evaluating frontend engineering skills.

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/A-hasan-code/to_do_li.git
cd to-list
```

### 2. Install Dependencies
```
npm install
```



### 3. Start Development Server
```
npm run dev
```

### 4. Build for Production
```
npm run build
```

### 5. Preview Production Build
```
npm run preview
```

---

## ✨ Bonus Features Implemented

| Feature                                   | Status ✅ |
|-------------------------------------------|-----------|
| Responsive layout (mobile/tablet/desktop) | ✅         |
| Dark/Light mode toggle                    | ✅         |
| Drag-and-drop task reordering             | ✅         |
| Search & filter (All/Completed/Pending)   | ✅         |
| Add/Edit/Delete tasks                     | ✅         |
| MUI design system integration             | ✅         |
| Persistent data via localStorage          | ✅         |
| Animated interactions and visual feedback | ✅         |

---

## ⚖️ Design Decisions & Trade-offs

- 🔁 **Drag & Drop**: Implemented using native JavaScript drag events for compatibility with React 19 (instead of `react-beautiful-dnd`).
- 📦 **No Backend**: All data stored in `localStorage` for simplicity and offline support.
- 🎨 **CDN-based Icons**: Fallback to Material Icons CDN ensures icons load even if local installation fails.
- ⏱ **JavaScript over TypeScript**: Faster setup and focused evaluation. Easily extendable to TS if required.

---

## 📱 Mobile First Design
- Layouts adapt across all breakpoints (mobile, tablet, desktop).
- Sticky filters, readable text sizes, and smooth interactions.
- Built using MUI's responsive grid and spacing system.

---

## 📤 Submission Guidelines
- All source code is clean, modular, and commented.
- App fulfills all **required** and most **bonus** features.
- Ready for review on any modern browser or device.

---

Made with 💻 by Ali hasan — submitted for XeuroTech Frontend Evaluation.
