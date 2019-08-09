import React from "react";
import "./App.css";
import {Notices} from "./components/Notices.js";
import {Notices as NoticesModel} from "./models/Notices.js";

class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      noticesLoading: true,
      notices: [],
    };

    this.noticesModel = new NoticesModel("http://localhost:3001/notices");
    this.noticesModel.getNotices().then(notices => {
      console.log(JSON.stringify(notices));
      this.setState({
        noticesLoading: false,
        notices: notices,
      });
    });
  }

  render() {
    return (
      <div className="notices-app">
        <Notices notices={this.state.notices} loading={this.state.noticesLoading} />
      </div>
    );
  }
}

export default App;
