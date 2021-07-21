import '../Styles/Subscription.css'
import img from '../Images/abstract-woman-preparing-a-salad.jpg'
import SubscriptionDetails from './SubscriptionDetails'
const Subscription=()=>{
    const renewPlan=()=>{
        alert('Your plan is renewed')
    }
    const cancelPlan=()=>{
        alert('Your Pan is canceled')
    }
    // When we have proper data we can use states and map multiple data and pass it using props and we can use context also to store data globally
    return(
        <div className='my_subscription'>
            <h3 className=''>My Subscriptions</h3>
            <div className='subscription_container'>
                <div className='details'>
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <div className='about'>
                        <h4>Nazma Biwi</h4><span className='fas fa-check-circle  green_check'></span>
                        <p> <span className='fas fa-phone'></span><a href="tel:+918950338323">8950338323</a> </p>
                    </div>
                </div>
                <div className='premium_chit'>
                    <p>PREMIUM</p>
                </div>
                <hr  className='hr_subs'/>
                <SubscriptionDetails renew={renewPlan} cancel={cancelPlan}/>
            </div>
            <button className='add_sub_btn' onClick={()=>alert('Hey What you want to do')}><span className='fas fa-plus'></span></button>
            <div className="clearfix"></div>
           
        </div>
    )
}
export default Subscription;