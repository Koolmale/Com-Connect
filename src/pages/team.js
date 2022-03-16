import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/team.css'
import Aalyan from '../images/team/aalyan.jpg'
import Kumel from '../images/team/kumel.jpg'
import Zackaria from '../images/team/zackaria.jpg'
import AliRastegar from '../images/team/ali rastegar.png'

function Team() {
    return (
        <div className='team body'>
            <div className="team-banner">
                <h2 className='team-banner-title'>Meet the<br/>Team</h2>
            </div>

            <Container>

                <Row>
                    <Col md={{span: 5, offset: 1}}>
                        <Card className='team-card'>
                            <Card.Img variant="top" src={Aalyan} alt='Aalyan' className='team-person-img'/>
                            <Card.Body>
                                <Card.Title className='team-card-title'>Aalyan</Card.Title>
                                <span className='team-card-subtitle'>Co-founder</span>
                                <Card.Text>Aalyan is an 11th grader at Rise Academy, and enjoys mountain biking and working out.
                                    He hopes to major in physics and has an interest in astronomy and community service. Aalyan is
                                    motivated to help out anyone in need any way he can.
                                </Card.Text>
                                <a className='team-card-social-link' href='https://www.linkedin.com/in/aalyan-aamir/'>
                                    <i className='fa fa-linkedin' />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card className='team-card'>
                            <Card.Img variant="top" src={Kumel} alt='Kumel' className='team-person-img'/>
                            <Card.Body>
                                <Card.Title className='team-card-title'>Kumel</Card.Title>
                                <span className='team-card-subtitle'>Co-founder</span>
                                <Card.Text>Kumel is a junior at Rise Academy with interests in computer science,
                                    cybersecurity, and mathematics. He enjoys playing soccer, running, and reading books.
                                    Kumel is driven to serve the community and help anyone in need.
                                </Card.Text>
                                <a className='team-card-social-link' href='https://www.linkedin.com/in/kumelh/'>
                                    <i className='fa fa-linkedin' />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 5, offset: 1}}>
                        <Card className='team-card'>
                            <Card.Img variant="top" src={Zackaria} alt='Zackaria' className='team-person-img'/>
                            <Card.Body>
                                <Card.Title className='team-card-title'>Zackaria</Card.Title>
                                <span className='team-card-subtitle'>Co-director of technology</span>
                                <Card.Text>
                                    Zackaria is a junior at Rise Academy who enjoys skiing, basketball, and
                                    gaming. He hopes to major in computer science, and has pursued projects
                                    in many different areas from robotics, chat bots, to web development.
                                    Zackaria has a passion for helping others and is motivated to help out
                                    anyone who needs it.
                                </Card.Text>
                                <a className='team-card-social-link' href='https://www.linkedin.com/in/zackaria-ghanbari-939b141bb/'>
                                    <i className='fa fa-linkedin' />
                                </a>
                                <a className='team-card-social-link' href='https://github.com/okay1204'>
                                    <i className='fa fa-github' />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card className='team-card'>
                            <Card.Img variant="top" src={AliRastegar} alt='Ali Rastegar' className='team-person-img'/>
                            <Card.Body>
                                <Card.Title className='team-card-title'>Ali Rastegar</Card.Title>
                                <span className='team-card-subtitle'>Co-director of technology</span>
                                <Card.Text>
                                    I like men
                                </Card.Text>
                                <a className='team-card-social-link' href='https://github.com/VolVox99'>
                                    <i className='fa fa-github' />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team