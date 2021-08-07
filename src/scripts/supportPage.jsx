const createElement = require('./createElement');

const supportPage = podcast => {
  return(
    <div style='line-height: 200%;'>
      <h3>Support the Show</h3>
      <p style='margin-top:1rem;'>If you are enjoying Revolutions, please consider making a donation to support the show. Think of how many hours you spend listening to me talk about history. Now think about how many hours it takes me to put together just one of these episodes. Help me keep making them!</p>
      <p style='margin-top:1rem;'>You can either make a one time donation to the show using a debit or credit card or...even better!...set up a recurring subscription. Just enter the amount you'd like to send and click the "make this a monthly donation" box. </p>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className='support-form'>
        <input name="cmd" type="hidden" value="_s-xclick" />
        <input name="hosted_button_id" type="hidden" value="6T98W4Y55DWT4" />
        {/* <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://thehistoryofrome.typepad.com/.a/6a01053629a711970c01b8d0ea661e970c-pi" type="image" className='support-submit'/> */}
        <input alt="PayPal - The safer, easier way to pay online!" type="submit" name='submit' className='support-submit' value='Support'/>
      </form>
      <p style='margin-top:1.5rem;'>Thaaaaaannnnnnkkkkkk yooooooouuuuuuu. </p>
      <p>---Mike</p>
    </div>
  )
}

module.exports = supportPage;
