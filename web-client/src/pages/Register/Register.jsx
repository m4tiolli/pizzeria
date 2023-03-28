import './Register.css'
import logo from '../../assets/Logo.png'
import Header from '../../components/Header/Header'

function Register() {
    return (
        <div>
        <Header />
        <div className='cont'>
            <div className='block'>
                <h1 className='title'>register</h1>
                <input type="text" name="" id="" placeholder='matiolli' />
                <input type="text" name="" id="" placeholder='youremail@email.com' />
                <input type="password" placeholder='yourpassword' name="" id="" />
                <button className='signin btn'>register</button>
            </div>
        </div>
        </div>
    )
}
export default Register;