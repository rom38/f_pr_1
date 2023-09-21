import "../styles/Day.css";

const Day = ({ date, weather, high, low }) => {
    return (
        <div className="Day">
            <h3>{date}</h3>
            <p>{weather}</p>
            <p>макс. темп.: {high}&deg;C</p>
            <p>мин. темп.: {low}&deg;C</p>
        </div>
    );
};

export default Day;
