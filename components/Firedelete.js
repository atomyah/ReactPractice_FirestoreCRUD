import React, {Component} from 'react'
import Router from 'next/router';
import {db} from "../store";


class Firedelete extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  // 初期化処理
  constructor(props) {
    super(props);
    this.state = {
      id_str:'',
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    console.log('doChangeの中' + e.target.value);
    this.setState({
      id_str:e.target.value
    })
  }


  doAction(){
    this.deleteFireData();
    Router.push('/fire');
  }


  // 項目の削除
  deleteFireData(){
    let id = this.state.id_str;
    console.log('■id: ' + id);
    db
    .doc("sample/" + id)
    .delete()
    .then(() => {
        console.log('削除しました')
    })
  }

  // レンダリング
  render(){
    return (<div>
      <table>
      <tbody>
        <tr>
          <th className="label">ID:</th>
          <td><input type="text" placeholder="delete ID:"
            onChange={this.doChange}
            value={this.state.id_str} /></td>
        </tr>
        <tr><th></th><td>
        <button onClick={this.doAction}>Delete</button>
        </td></tr>
      </tbody>
      </table>
    </div>)
  }


}


export default Firedelete;