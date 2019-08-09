import React from 'react';

function Notice(param) {
  return (
    <div className="notice">
      <h1>{param.notice.title}</h1>
      <p>{param.notice.content}</p>
    </div>
  );
}

export class Notices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="notices">
          <p>Loading...</p>
        </div>
      );
    }
    return (<div className="notices">
      {this.props.notices.map(notice => <Notice key={notice.id} notice={notice} />)}
      </div>
    );
  }
}
