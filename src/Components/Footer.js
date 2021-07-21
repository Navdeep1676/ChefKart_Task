import '../Styles/Footer.css'
import logo from '../Images/logo.png'
const Footer=()=>{
return(
    <footer className='footer'>
        {/* We can add link using routing when we have proper data and diffrent routes */}
        <div className='link'>
            <a href=""><img src={logo} alt="logo" /><p>Home</p></a>
        </div>
        <div className='link'>
            <a href=""><span className='fas fa-compass'></span><p>Explore</p></a>
        </div>
        <div className='link'>
            <a href=""><span className='fas fa-headset'></span><p>Support</p></a>
        </div>

    </footer>
)
}
export default Footer