import '../styles/showcaseCard.css'

function ShowcaseCard({title, description, image, imageAlt, buttonText, buttonLink}) {
    return (
        <div className="showcase-card">
            <div className='showcase-card-img-wrapper'>
                <img className="showcase-card-img" src={image} alt={imageAlt}/>                 
            </div>
            <div className="showcase-card-body">
                <h4 className="showcase-card-title">{title}</h4>
                <p className="showcase-card-desc">{description}</p>
            </div>
            <div className="showcase-card-footer">
                <a href={buttonLink} className="showcase-card-button">{buttonText} &raquo;</a>
            </div>
        </div>
    )
}

export default ShowcaseCard;