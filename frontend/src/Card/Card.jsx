import "./Card.css";

function Card() {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        fetch(`https://api.example.com/images/${props.id}`)
            .then(response => response.json())
            .then(data => setImageUrl(data.imageUrl));
    }, []);

    return (
        <div className="card">
            <p>Text Message</p>
            <img src={props.imageUrl} alt="" />
            <p>Card Author</p>
            <div className="card-buttons">
                <button>Upvote</button>
                <button>Delete Card</button>
            </div>
        </div>
    )
}

export default Card;
