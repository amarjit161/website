# Firebase Setup for Like Button

## Quick Setup Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **Create Project**
3. Name: `wedding-invite-app`
4. Disable Google Analytics (optional)
5. Click **Create Project**

### 2. Add a Web App

1. In Firebase Console, click the **Web** icon (</> symbol)
2. App nickname: `Wedding Invite`
3. Click **Register App**
4. Copy the Firebase config object

### 3. Update `src/firebase.ts`

Replace the `firebaseConfig` in `src/firebase.ts` with your config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Start in **Production mode**
4. Select your region (closest to your location)
5. Click **Create**

### 5. Set Security Rules

In Firestore → Rules tab, replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /wedding/likes {
      allow read: if true;
      allow update: if request.resource.data.count == resource.data.count + 1;
      allow create: if request.resource.data.count == 0;
    }
  }
}
```

Then click **Publish**.

### 6. Test the Like Button

1. Your website will now have a working Like button
2. The count is shared globally across all users
3. Each browser/device can like only once (stored in localStorage)
4. Click the ❤️ button to like, and the count updates in real-time

## How It Works

- **Frontend:** React component with localStorage to track user's like status
- **Backend:** Firebase Firestore stores the global like count
- **Real-time:** Firestore updates instantly across all users
- **Security:** Rules prevent unauthorized updates
- **UX:** Heart animation and "LIKED" status once clicked

## Troubleshooting

**"Error: Failed to get document"**
- Make sure Firestore Database is created
- Check that security rules are published

**"Like button doesn't update"**
- Clear localStorage: Press F12 → Application → Clear storage
- Refresh the page

**"Can't like again"**
- This is intentional! Each user/device can like only once
- Clear browser storage if you want to test again
