const App = () => {
    return (
        <div>
            <Tweet username="User 1" date={new Date().toDateString()} message="Tweet 1 message"/>

            <Tweet username="User 2" date={new Date().toDateString()} message="Tweet 2 message"/>

            <Tweet username="User 3" date={new Date().toDateString()} message="Tweet 3 message"/>
        </div>

    )
}