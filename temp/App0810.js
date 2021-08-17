
import React, { useState} from 'react';
// import { useState } from 'react/cjs/react.production.min'

function App() {
  // 解構賦值語法
  const [total, setTotal] = useState(8);
  //狀態

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total * 2);
        }}
      >
        {/* 屬性 */}
        {total}
      </h1>
    </>
  );
}

// import React from 'react'
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       total: 999,
//     }
//   }
//   // 眠面沒有function稱作方法
//   render() {
//     return (
//       <>
//         <h1
//           onClick={() => {
//             this.setState({ total: this.state.total + 1 })
//           }}
//         >
//           {this.state.total}
//         </h1>
//       </>
//     )
//   }
// }

// 不建議
export default App;
// export default withRouter(App);
