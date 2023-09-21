import { Component, Fragment } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header buttonName={"someButtonbbbbbbhhh upd"} />

                <Main />
            </Fragment>
        );
    }
}

export default App;
