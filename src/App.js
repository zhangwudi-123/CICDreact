import './App.css';
// import { useEffect, useState } from "react";
// import connect from "./connect";
// import route from "./router";
// import {BrowserRouter } from 'react-router-dom'
// import { Button, Flex } from "antd";
function App(props) {
  // useEffect(() => {
  //   // console.log("监听数据变化" + JSON.stringify(store.getState()));
  //   // store.subscribe(() => {
  //   //   console.log("监听数据变化" + store.getState());
  //   //   setnumber(store.getState().comment);
  //   // });
  // }, []);
  // const addpropser = (num) => {
  //   console.log("4545450" + num);
  //   store.dispatch({
  //     type: "ADD",
  //     num: num,
  //   });
  // };
  //   const ADD = (event) => {
  //     event.preventDefault();
  //     props.addpropser(3);
  //   };
  return (
    <div className="App">
      {/* {props.comment}
      <button onClick={ADD}>+1</button> */}
      555
    </div>
  );
}
// const fun1 = (state) => {
//   return {
//     comment: state.comment,
//   };
// };
// const fun2 = (dispatch) => ({
//   addpropser(num) {
//     dispatch({
//       type: "ADD",
//       num: num,
//     });
//   },
// });
export default App;
