
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">mediahunter</h3>
          <p> Mediahunter</p>
        </div>
        </div>
        <ul className="d-flex">
          <li>
            <span><a href="google.com">GOOOOGLE</a></span>
          </li>
          <li className="mr-30">
          <img width={18} height={18} src="/img/logo.png" />
            <span>10000 tg.</span>
          </li>
        <li>
        <img width={18} height={18} src="/img/logo.png" />
        </li>
        </ul>
      </header>


      <div className="content p-40">
        <h1 className="mb-40">Vse vak</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={133} src="/img/logo.png" />
          <p></p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Cost</span>
              <b>101010tg</b>
            </div>
            <button className="button">+</button>
          </div>
        </div>
        
        <div className="card">
          <img width={133} height={133} src="/img/logo.png" />
          <p></p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Cost</span>
              <b>101010tg</b>
            </div>
            <button className="button">+</button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={133} src="/img/logo.png" />
          <p></p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Cost</span>
              <b>101010tg</b>
            </div>
            <button className="button">+</button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={133} src="/img/logo.png" />
          <p></p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Cost</span>
              <b>101010tg</b>
            </div>
            <button className="button">+</button>
          </div>
        </div>

        </div>

      </div>


    </div>
  );
}

export default App;
