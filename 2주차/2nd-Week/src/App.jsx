import "./App.css";
// 1. List Component를 Import 해줍니다.
import List from "./components/List";

function App() {
  const nickname = "제이드";
  const sweetPotato = "고구마";
  const array = ["REACT", "NEXT", "VUE", "SVELTE", "ANGULAR", "REACT-NATIVE"];
  return (
    <>
      <strong className="school">홍익대학교</strong>
      <p style={{ color: "purple", fontWeight: "bold", fontSize: "3rem" }}>
        {nickname}/김민주
      </p>
      <h1>
        {nickname}는 {sweetPotato} 피자를 좋아합니다.
      </h1>
      <ul>
        {array.map((yaho, idx) => (
          // <li key={idx}>{yaho}입니다.</li> -> List 컴포넌트를 호출합니다.
          <List key={idx} tech={yaho} />
        ))}
      </ul>
    </>
  );
}

export default App;
