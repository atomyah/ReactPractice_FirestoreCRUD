import React, {Component} from 'react'
import {db} from "../store";
import Router from 'next/router';

class Fireadd extends Component {
    style = {
      fontSize:"12pt",
      padding:"5px 10px"
    }
  
  
    // 初期化処理
    constructor(props) {
      super(props);
      this.state = {
        name_str:'',
        msg_str:'',
        lastID:-1,
        data:[]
      }
      this.getLastID(); // 最後のIDのチェック
      this.doChangeName = this.doChangeName.bind(this);
      this.doChangeMsg = this.doChangeMsg.bind(this);
      this.doAction = this.doAction.bind(this);
    }
  
  
    doChangeName(e){
      this.setState({
        name_str:e.target.value
      })
    }
    doChangeMsg(e){
      this.setState({
        msg_str:e.target.value
      })
    }
    doAction(e){
      this.addFireData();
      Router.push('/fire');
    }
  
  
    // 最後のIDを取得
    getLastID(){
        db
          .collection("sample")
          .orderBy('ID')
          .limitToLast(1)
          .get()
          .then(querySnapshot => {
              const items = querySnapshot.docs.map(doc => doc.data());
              console.log('itemsは■' + JSON.stringify(items));
              const itemID = items[0].ID; // 配列構造のJSONデータitemsからID部分だけをとりだす
              console.log('itemIDは■' + itemID);
                this.setState({
                    lastID:itemID
                  });
          });   
    }
  
  
    // データを追加する
    addFireData(){
        if (this.state.lastID == -1){
            return;
        }
        let id = this.state.lastID * 1 + 1; //ここで * 1 + 1の処理をしたことでidは数値型になった。
        console.log('idは■' + id);
        let stringed_id = String(id); // ここでString型にしないとFunction CollectionReference.doc() requires its first argument to be of type non-empty string, but it was:... エラー
        console.log('stringed_idは■' + stringed_id);
        const docRef = db.collection("sample").doc(stringed_id);
        docRef
          .set({
            ID: stringed_id,
            message: this.state.msg_str,
            name: this.state.name_str
          });           
    }
  
  
    // レンダリング
    render(){
      if (this.state.lastID == -1){
        this.getLastID();
      }
      return (<div>
        {(this.state.lastID == -1)
        ?
        <p>please wait...</p>
        :
        <table>
        <tbody>
          <tr>
            <th className="label">name</th>
            <td><input type="text" placeholder="your name."
              onChange={this.doChangeName}
              value={this.state.name_str} /></td>
          </tr>
          <tr>
            <th className="label">message</th>
            <td><input type="text" size="40"
              placeholder="type message..."
              onChange={this.doChangeMsg}
              value={this.state.msg_str} /></td>
          </tr>
          <tr><th></th><td>
          <button onClick={this.doAction}>Add</button>
          </td></tr>
        </tbody>
        </table>
        }
      </div>)
    }
  }
  
  
  export default Fireadd;