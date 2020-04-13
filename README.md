#### CRUD使用ファイル
- pages/fire.js
- pages/fire_add.js
- pages/fire_find.js
- pages/fire_del.js
- components/Fireadd.js
- components/Firefind.js
- components/Firedelete.js
- components/Sampledata.js(fire.jsに埋め込まれている)
- store.js(firebase.initialAppをしている)

#### URL
- http://localhost:3000/fire
- http://localhost:3000/fire_add
- http://localhost:3000/fire_find
- http://localhost:3000/fire_del

#### .config.jsの書き方
```jsx
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "
};
```