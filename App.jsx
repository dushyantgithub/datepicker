import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './style.css';
var dateArray = require('moment-array-dates');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.dateIteration = this.dateIteration.bind(this);
		this.state = {
		  	startDay: moment().format('DD'),
		  	startMonth: moment().format('MM'),
		  	startYear: moment().subtract(1, 'y').format('YYYY'),
	      	endYear: moment().add(1, 'y').format('YYYY'),
	      	currentYear: moment().format('YYYY'),
	      	dateRange: [],
	      	addclicks: 0,
	      	subclicks: 0,
	      	currentMonth: 0
		};
		this.state.currentDate = this.state.currentYear + "-" + this.state.startMonth + "-" + this.state.startDay;
		this.manipulateMonth = '';
		this.manipulateMonth2 = '';
		this.newDate = '';
		this.defaultDate1 = moment().startOf('month').format('MM DD YYYY');
	    this.defaultDate2 = moment().endOf('month').format('MM DD YYYY');
	}
	dateIteration(params) {
		if(params == 'default') {
			this.manipulateMonth = moment().add(this.state.addclicks, 'M').startOf('month').format('MM DD YYYY');
			this.manipulateMonth2 = moment().add(this.state.addclicks, 'M').endOf('month').format('MM DD YYYY');
			this.setState({ 
				dateRange: dateArray.range(this.manipulateMonth, this.manipulateMonth2, 'MMM DD', true),
				addclicks: this.state.addclicks + 0,
				subclicks: this.state.subclicks + 0
			});

		} else if(params == 'negative'){

			this.setState({
				subclicks: this.state.subclicks + 1,
				addclicks: 0
			});
			this.manipulateMonth = moment().subtract(this.state.subclicks, 'M').startOf('month').format('MM DD YYYY');
			this.manipulateMonth2 = moment().subtract(this.state.subclicks, 'M').endOf('month').format('MM DD YYYY');
			this.setState({dateRange: dateArray.range(this.manipulateMonth, this.manipulateMonth2, 'MMM DD YYYY', true)});

		} else if(params == 'positive') {

			this.setState({
				addclicks: this.state.addclicks + 1,
				subclicks: 0
			});
			this.manipulateMonth = moment().add(this.state.addclicks, 'M').startOf('month').format('MM DD YYYY');
			this.manipulateMonth2 = moment().add(this.state.addclicks, 'M').endOf('month').format('MM DD YYYY');
			this.setState({dateRange: dateArray.range(this.manipulateMonth, this.manipulateMonth2, 'MMM DD YYYY', true)});

		}
		
	}
   render() {
   	console.log(this.state.dateRange)
   	// console.log(this.state.startMonth)
	    return (
	    	<div>
	    		<button onClick={() => this.dateIteration('default')}>{this.state.currentDate}</button>
	    		<div>
	    			<button onClick={() => this.dateIteration('negative')}>Previous Month</button>
	    			<button onClick={() => this.dateIteration('positive')}>Next Month</button>	    			
	    		</div>

	    	</div>
	   	);
	}
}
export default App;