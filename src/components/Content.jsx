

export default function Content(props) {
    //Inline Styling
    const h1Style = {
        margin: '40px',
        border: '5px solid pink',
        fontSize: '15px',
        color: 'purple'
        
     }
    return (
    // <p style={{color: props.color}}>{props.text}</p>
    <p style= {h1Style}> {props.text}</p>
    );
}