const createElement = require('./createElement');

const contactPage = podcast => {
  return(
    <>
      <h3>Contact</h3>
      <p style='margin-top: 1rem;'>If you have questions, comments, praise or scorn email me at</p>
      <a href="mailto:revolutionspodcast@gmail.com" style='display: block; margin-top: 1rem;'>
        revolutionspodcast@gmail.com
      </a>
      <p style='margin-top: 1rem;'>I do my best to respond, but I get a lot of emails and can't always reply. Apologies in advance.</p>
    </> 
  )
}

module.exports = contactPage;
