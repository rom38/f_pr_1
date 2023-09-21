import "../styles/Day.css";

const Day = ({ date, weather, high, low, temp }) => {
    return (
        <div className="Day">
            <h3>{date}</h3>
            <p>{weather}</p>
            {(typeof temp == "undefined") ? (<>
                <p>макс. темп.: {high}&deg;C</p>
                <p>мин. темп.: {low}&deg;C</p></>) :
                (<p>темпер. возд.: {temp}&deg;C</p>)}
        </div>
    );
};

export default Day;
