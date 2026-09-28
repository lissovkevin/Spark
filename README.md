# Spark

A habit tracking app built with React Native and Expo. Track your daily habits, maintain streaks, and build consistency.

> **Status:** Work in progress

## Tech Stack

- **Framework:** Expo (expo-router)
- **Language:** TypeScript
- **Database:** Firebase Firestore
- **Animations:** react-native-reanimated
- **Navigation:** React Navigation (bottom tabs)

## Features

**Implemented**
- Custom animated bottom tab bar

**Planned**
- Track daily habits with streak tracking
- Real-time data sync with Firestore
- Cross-platform support (iOS, Android, Web)

## Getting Started

### Prerequisites

- Node.js
- Expo Go or an emulator
- A Firebase project with Firestore enabled

### Installation

1. Clone the repo

```bash
git clone https://github.com/lissovkevin/spark.git
cd spark
```

2. Install dependencies

```bash
npm install
```

3. Set up Firebase

Create a `src/lib/firebase.ts` file with your Firebase config:

```ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // your config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. Start the app

```bash
npx expo start
```

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx       # Home screen
│       └── habits.tsx      # Habits screen
├── components/
│   ├── TabBar.tsx
│   └── TabBarButton.tsx
├── constants/
├── lib/
│   └── firebase.ts
└── themes/
    └── colors.ts
```

## Author

Kevin Lissov