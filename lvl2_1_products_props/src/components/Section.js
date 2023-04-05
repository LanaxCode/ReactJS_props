const Section = (props) => {
    return (
        <div>
            <p>{props.img}</p>
            <p>{props.name}</p>
            <p>{props.preis}</p>
            <input type="button" value="BUY NOW" />
        </div>
    );
}

export default Section;