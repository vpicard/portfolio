import './App.css';

function App() {
  return (
    <div className="App">
      <svg viewBox="0 0 1512 481" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 116.938C0 116.938 62.5 190.478 158 190.478C253.5 190.478 492.5 -8.58732 593 0.288211C693.5 9.16374 851.5 281.769 977 281.769C1102.5 281.769 1150.5 129.617 1256 64.9528C1361.5 0.288208 1512 116.938 1512 116.938V342.63C1512 342.63 853.5 516.337 742.5 474.495C631.5 432.654 433.5 281.769 370.5 260.215C307.5 238.66 0 342.63 0 342.63V116.938Z" fill="#FF0000"/>
      </svg>
      <div className='main-card'>
        <img alt='Profil picture' src={require('./assets/images/main-profil-picture.png')}/>
        <p>
          Hello, I'm
          <span>Vincent Picard</span>
          Mobile Native Developper
        </p>
      </div>
    </div>
  );
}

export default App;
