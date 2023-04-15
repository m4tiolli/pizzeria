import './User_Login.css';
import logo from '../../../assets/logo.png'
export default function Login()
 {
     return (
     <div>
        <div className="header">
            <img src={logo} alt="" className="logo" />
              <h1 className="title">Pizzeria Balcão</h1>
        </div>

         <div className="container">

            <div className="block">
                <h1 className="info">Sign in with your <br/> Atendent account</h1><br/>
                    <input type="text" className="input" placeholder="User" name="" id="" /><br/>

                    <input type="text" className="input" placeholder="Password" name="" id="" /><br />

                <a href='https://aln2006-cuddly-umbrella-gjp7rjgpg9gh9wqw-3001.preview.app.github.dev/' ><button className="button" >Login</button></a>
            </div>

        </div>
        
    </div>
)
}