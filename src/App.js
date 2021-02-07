import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Save & Load 홈페이지가 될 곳입니다.
        </p>
        <a
          className="App-link"
          href={process.env.REACT_APP_FOLDER}
          target="_blank"
          rel="noopener noreferrer"
        >
          대학 밥 사기 목록 수정하러 가기
        </a>
      </header>
    </div>
  );
}

export default App;
