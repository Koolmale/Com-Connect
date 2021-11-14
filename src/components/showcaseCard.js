import '../styles/showcaseCard.css'
import { Card, Button } from 'react-bootstrap'

function ShowcaseCard({title, description, image, imageAlt, buttonText, buttonLink}) {
    return (
        <Card
            className="showcase-card"
        >
            <Card.Img variant="top" src={image} alt={imageAlt} className='showcase-card-img'/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <div className='showcase-card-button-container'>
                <Button variant="secondary" className='showcase-card-button' href={buttonLink}>{buttonText} &raquo;</Button>
            </div>
        </Card>
)
}

export default ShowcaseCard;