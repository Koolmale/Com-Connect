import '../styles/contact.css'

function Contact() {
    return (
        <div className="body contact">
            <h2 className='contact-header'>Contact Us</h2>
            <p className='contact-description'>Do you have any questions? Feel free to contact us!</p>

            <iframe className='contact-form' title='Contact Us' src="https://docs.google.com/forms/d/e/1FAIpQLScan_Dn90E1iEOKJH2jZ8EjrB3iNehvQKAiL8qbvn3kjGt3SQ/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}

export default Contact