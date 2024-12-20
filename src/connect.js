// import store from "./store";
// import React, { useEffect, useState } from "react";
// // const connect = (fn1, fn2) => {
// //   return function (newer) {
// //     function Newoover(props) {
// //       const fn1over = fn1(store.getState());
// //       const fn2over = fn2(store.dispatch);
// //       useEffect(() => {
// //         console.log("测试执行");
// //       }, [fn1over, fn2over]);
// //       return <newer {...props} {...fn1over} {...fn2over} />;
// //     }
// //     return Newoover;
// //   };
// // };
// const connect = (fn1, fn2, l) => {
//   return function (Newer) {
//     function Newoover(props) {
//       const [l1, setl1] = useState(0);

//       const fn1over = fn1(store.getState());
//       const fn2over = fn2(store.dispatch);
//       useEffect(() => {
//         console.log("测试执行");
//       }, [fn1over, fn2over, l1]);

//       // 直接渲染传入的 "newer" 组件，传递属性
//       return <Newer {...props} {...fn1over} {...fn2over} />;
//     }
//     return Newoover;
//   };
// };

// export default connect;
