const Tweet = ({username, date, message}) => {
    return (
        <div>
            <h2>{username} wrote a tweet on {date}</h2>
            <p><b>{message}</b></p>
        </div>
    )
}