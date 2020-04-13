import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";
import "firebase/firestore"; 
import { firebaseConfig } from './.config';

// Firebaseの設定. initializeApp()は一度だけ実行させたいので、一度だけ呼ばれるstore.jsに記述する.
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
const db = firebase.firestore();
export { db };


//// 以下はRedux処理.あくまで参考でここでは使用していない.
// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = intitial, action) {
  switch (action.type) {
    // ダミー
    case 'TESTACTION':
      return state;
    // デフォルト
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, 
    applyMiddleware(thunkMiddleware))
}


/* チャプター６Firebaseのためコメントアウト .以下はRedux利用計算機コード
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


// ステート初期値
const initial = {
  message:'START',
  data:[],
  number:[],
  result:0
}


// レデューサー
function calcReducer(state = intitial, action) {
  switch (action.type) {
    // 計算実行
    case 'ENTER':
      let data2 = state.data.slice();
      let s = action.value;
      data2.unshift(s);
      let num = s.replace(/[^0-9]/g,"");
      let number2 = state.number.slice();
      number2.unshift(num);
      let result = (state.result * 1) + (num * 1);
      return {
        message:'ENTER',
        data:data2,
        number:number2,
        result:result
      };
    // リセット
    case 'RESET':
      return {
        message:'RESET',
        data:[],
        number:[],
        result:0
      };
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(calcReducer, state,
    applyMiddleware(thunkMiddleware))
}
*/
