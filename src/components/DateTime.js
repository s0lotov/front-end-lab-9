import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate, selectCurrentDate } from './../store/dateTimeSlice';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

class DateTime extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      const newDate = new Date();
      this.props.updateDate(newDate);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { currentDate } = this.props;

    return (
      <div>
        <CurrentDate date={currentDate} />
        <CurrentTime time={currentDate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentDate: selectCurrentDate(state),
});

const mapDispatchToProps = { updateDate };

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);