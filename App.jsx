import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './style.css';


class App extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	      startDate: moment().subtract(1, 'y'),
	      currentDate: moment(),
	      endDate: moment().add(1, 'y')
	    };
	    this.handleChange = this.handleChange.bind(this);
  	}
  	handleChange(date) {
	    this.setState({
	      currentDate: date
	    });
	}
   render() {
   	console.log('Start Date', this.state.startDate)
   	console.log('Current Date', this.state.currentDate)
   	console.log('End Date', this.state.endDate)
	    return (
	    	<DatePicker
    	        selected={this.state.currentDate}
    	        onChange={this.handleChange}
    	        startDate ={this.state.startDate}
    	        endDate={this.state.endDate}
    	        minDate={this.state.startDate}
    	        maxDate={this.state.endDate}
    	        showYearDropdown={true}
	    	/>
	   	);
	}
}
export default App;