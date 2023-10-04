const Person = ({name , age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {name.slice(0, 6)}</li>
                <li>Age: {age}</li>
                Hobbies:
                <ul>
                    {hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
            <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
        </div>
    )
}