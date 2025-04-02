const Anurag = (props) => {
    const {name, city} = props;
    const country = "India";
    return (<div>
            <h1>
                Hi {name}
            </h1>
            <p>City: {city}</p>
            <p>I am from {country}</p>
        </div>)
}
//props
//props = {name: "Anurag"
//}
export default Anurag;