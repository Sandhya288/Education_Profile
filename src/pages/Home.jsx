
import QR  from '../images/QR.jpeg';
const Home = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>WELCOME TO 2STAR IT SOLUTIONS PVT LTD</h1>
          <p>Enroll today & Upskill yourself!</p>
          <img
            src={QR}
            alt="Small Logo"
            height="100" />
        </div>
      </div>
    </main>
  )
}

export default Home;
