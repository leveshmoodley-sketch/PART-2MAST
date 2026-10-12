# 🍽️ Bistro Manager

A React Native mobile application that helps Chef Christoffel manage his restaurant menu digitally, replacing the old paper-based system.

**Part 2 Submission** — First Working Version

---

## 📱 Project Overview

The Bistro Manager app allows the chef to:
- ✅ Add new menu items
- ✅ View all menu items in an organized list
- ✅ Receive clear validation and feedback messages

Each menu item stores:
- Dish Name
- Description
- Course (Starter, Main Course, or Dessert)
- Price

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React Native (Expo)** | Cross-platform mobile framework |
| **TypeScript** | Type-safe JavaScript |
| **Expo Router** | File-based navigation |
| **React Context API** | State management across screens |
| **@react-native-picker/picker** | Dropdown selector for course |

---


---

## 🚀 How to Run the App

### Prerequisites
- Node.js installed
- Expo Go app installed on your Android device (from Play Store), **or** an Android emulator set up in Android Studio

### Steps

1. **Open the project folder in VS Code**

2. **Open the terminal** (`` Ctrl + ` ``)

3. **Install dependencies**
   ```bash
   npm install
   npx expo install @react-native-picker/picker
## 📂 Project Structure
BistroManager/
├── src/
│ ├── app/
│ │ ├── _layout.tsx → Navigation setup + MenuProvider
│ │ ├── index.tsx → Home Screen (view all items)
│ │ └── add-item.tsx → Add Item Screen (form)
│ ├── components/
│ │ └── MenuItemCard.tsx → Reusable card for each menu item
│ ├── constants/
│ │ └── Colors.ts → App-wide color palette
│ ├── context/
│ │ └── MenuContext.tsx → Shared menu state
│ └── types/
│ └── MenuItem.ts → TypeScript interfaces
├── app.json
├── package.json
└── tsconfig.json

