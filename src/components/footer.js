import '../styles/footer.css'

function Footer() {
    return (
        <footer>
            <div className='social-container'>
                <div className='social-buttons-container'>
                    <a className='social-button' href='https://www.instagram.com/community_connector/'><i className='fab fa-instagram' /></a>
                    <a className='social-button' href='https://www.linkedin.com/company/com-connector/'><i className='fab fa-linkedin' /></a>
                    <a className='social-button' href='https://github.com/Koolmale/Com-Connect'><i className='fab fa-github' /></a>
                </div>
            </div>
            <div className='copyright-container'>
              <span>© 2021 Copyright:</span>
              <a href="https://comconnector.com/">ComConnector.com</a>
            </div>
        </footer>
    )
}

export default Footer