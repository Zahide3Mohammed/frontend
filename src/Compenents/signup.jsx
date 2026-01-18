import { Link } from 'react-router-dom'
import Footer from '../element/footer'
import '../element/header'
import Header from '../element/header'
import './signup.css'

export default function SignUp(){
    return<>
    <Header></Header>
    <div className="page">
      <div className="container">
         {/* LEFT */}
        <div className="left">
          <div className="image-box">
            {/*<img src="images/chta.png" alt="welcome" className="img" />*/}
            <h1 className='tit1'>Welcome to our <br />Team</h1>
            <h2 className='tit2'>Mae ur new <br />friends</h2>
          </div>
        </div>


       {/* RIGHT */}
        <div className="right">
          

          <form className="form">
            <h2>Create an account</h2>

            {/* Nom + Prénom */}
            <div className="row">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prénom" />
            </div>

            {/* Age */}
            <input type="number" placeholder="Age" />

            {/* Pays */}
            <input type="text" placeholder="Pays" />

            {/* Sexe radio */}
            <div className="radio-group">
              <label>
                <input type="radio" name="sexe" value="Homme" />
                Homme
              </label>
              <label>
                <input type="radio" name="sexe" value="Femme" />
                Femme
              </label>
            </div>

            {/* Email + Téléphone */}
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Téléphone" />

           {/* Profile upload */}
  <label className="file-input">
    <span><img src="images/profil.png" alt=""></img></span>
    <input type="file"  />
  </label>

  {/* Terms checkbox */}
  <label className="terms">
    <input type="checkbox" />
    <Link to="/terms">I agree to the Terms & Conditions</Link> 
  </label>

            <button className="btn">Create account</button>
            <p className="subtitle">Already have an account? Log in</p>
          </form>
       
        </div>
      </div>
    </div>
    <Footer ></Footer>
    </>
}

