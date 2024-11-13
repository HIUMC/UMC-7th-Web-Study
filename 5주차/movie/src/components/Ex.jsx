import { useState } from "react";
import { useEffect } from 'react';
const Ex = () => {
  const [content, setContent] = useState(null);
  const [message, setMessage] = useState();

  useEffect(()=>{
    const regex = /[a-z0-9]|[\s\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    if (content && regex.test(content)) {
      setMessage("한글로만 입력해주세요.");
    } else if (content) {
      setMessage("한글으로만 이루어진 입력입니다!");
    }}
    ,[content]
)
//   const onValueChange = (e) => {

//     setContent(e.target.value);
// 	console.log(content)
// 		//한글 외 다른 입력 패턴을 검사하는 정규식
//     const regex = /[a-z0-9]|[\s\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
//     if (content && regex.test(content)) {
//       setMessage("한글로만 입력해주세요.");
//     } else if (content) {
//       setMessage("한글으로만 이루어진 입력입니다!");
//     }
//   };

  return (
    <>
      <input type="text" onChange={(e)=>setContent(e.target.value)} />
      {message}
    </>
  );
};

export default Ex;