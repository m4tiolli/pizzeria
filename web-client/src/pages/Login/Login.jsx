import './Login.css'
import logo from '../../assets/Logo.png'
import Header from '../../components/Header/Header'

function Login() {
    return (
        <div>
        <Header />
        <div className='cont'>
            <div className='block'>
                <h1 className='title'>login</h1>
                <input type="text" name="" id="" placeholder='youremail@email.com' />
                <input type="password" placeholder='yourpassword' name="" id="" />
                <button className='signin btn'>login</button>
            </div>
        </div>
        </div>
    )
}
export default Login;