const SubscriptionDetails=({renew,cancel})=>{
return(<div className='subs_details'>
<h6>Suscription details</h6>
<div className='subs_exp'>
<div className='subs_start'>
    <p>Start</p>
    <h5>21 July 2021</h5>
    <button className='btn ' onClick={cancel}>Cancel Plan</button>
</div>
<div className='subs_end'>
    <p>Expire</p>
    <h5>21 July 2022</h5>
    <button type='button' onClick={renew} className='btn btn_active'>Renew Plan</button>
</div>
</div>
</div>)
}
export default SubscriptionDetails