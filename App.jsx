import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './style.css';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  	startDay: moment().format('DD'),
		  	startMonth: moment().format('MM'),
		  	startYear: moment().subtract(1, 'y').format('YYYY'),
	      	endYear: moment().add(1, 'y').format('YYYY'),
	      	currentYear: moment().format('YYYY')
		};
		this.state.startDate = this.state.startYear + "-" + this.state.startMonth + "-" + this.state.startDay;
		this.state.endDate = this.state.endYear + "-" + this.state.startMonth + "-" + this.state.startDay;
		this.state.currentDate = this.state.currentYear + "-" + this.state.startMonth + "-" + this.state.startDay;
		this.handleDate = this.handleDate.bind(this);
	}

	handleDate(event){
	   this.setState({
	   	currentDate: event.target.value
	   }); 
	};
   render() {
   	console.log('Date', this.state.currentDate)
	    return (
	    	<form onSubmit={this.handleSubmit}>
		        <label>
			        Select Date :&nbsp;
			        <input className="datefield" type="date" name="datefield" value={this.state.currentDate} onChange={this.handleDate} min={this.state.startDate} max={this.state.endDate} />
		        </label>
	      	</form>
	   	);
	}
}
export default App;