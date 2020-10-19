function get_Events(){
	var events = [
        [10, 1, '15:00', 'BBQ'],
        [10, 5, '12:00-14:00', 'NCBA'],
        [10, 5, '15:00-18:00', 'TA'],
        [10, 5, '18:30-20:30', 'Online lab seminar'],
        [10, 6, '9:00-12:00', 'Deep Learning'],
        [10, 6, '13:00-16:00', 'Graph Theory'],
        [10, 6, '19:30-21:30', 'Volleyball'],
        [10, 7, '12:00-13:00', 'MIX'],
        [10, 8, '9:00-12:00', 'Social Computing'],
        [10, 8, '12:00-14:00', 'NCBA'],
        [10, 8, '14:00-15:00', 'CP1 TA'],
        [10, 8, '15:00-17:00', 'Seminar'],
        [10, 8, '18:00-20:00', 'CP1 TA class'],
        [10, 12, '15:00-18:00', 'TA'],
        [10, 12, '18:30-20:30', 'Online lab seminar'],
        [10, 13, '9:00-12:00', 'Deep Learning'],
        [10, 13, '13:00-16:00', 'Graph Theory'],
        [10, 13, '19:30-21:30', 'Volleyball'],
        [10, 15, '9:00-12:00', 'Social Computing'],
        [10, 15, '14:00-15:00', 'CP1 TA'],
        [10, 15, '15:00-17:00', 'Seminar'],
        [10, 15, '18:00-20:00', 'CP1 TA class'],
        [10, 16, '9:00-12:00', 'Data Mining'],
        [10, 19, '9:00-10:00', 'Volleyball referee'],
        [10, 19, '15:00-18:00', 'TA'],
        [10, 19, '18:30-20:30', 'Online lab seminar'],
        [10, 20, '9:00-12:00', 'Deep Learning'],
        [10, 20, '13:00-16:00', 'Graph Theory'],
        [10, 20, '19:30-21:30', 'Volleyball'],
        [10, 22, '9:00-12:00', 'Social Computing'],
        [10, 22, '13:00-14:00', 'Meet w/ Wilson'],
        [10, 22, '14:00-15:00', 'CP1 TA'],
        [10, 22, '15:00-17:00', 'Seminar'],
        [10, 22, '18:00-20:00', 'CP1 TA class'],
        [10, 23, '9:00-12:00', 'Data Mining'],
        [10, 23, '12:00-14:00', 'MIX'],
        [10, 24, '5:00-8:00', 'Road running'],
        [10, 26, '12:00-14:00', 'NCBA'],
        [10, 26, '15:00-18:00', 'TA'],
        [10, 26, '18:30-20:30', 'Online lab seminar'],
        [10, 27, '9:00-12:00', 'Deep Learning'],
        [10, 27, '13:00-16:00', 'Graph Theory'],
        [10, 27, '19:30-21:30', 'Volleyball'],
        [10, 29, '9:00-12:00', 'Social Computing'],
        [10, 29, '14:00-15:00', 'CP1 TA'],
        [10, 29, '15:00-17:00', 'Seminar'],
        [10, 29, '18:00-20:00', 'CP1 TA class'],
        [10, 30, '9:00-12:00', 'Data Mining'],
        [10, 31, '14:30-15:30', 'Dentist'],
        [11, 14, '9:00-10:00', 'Dentist']
	]
	return events;
}
function isEvent(month, date){
	var events = get_Events();
	var i;
	var str = '';
	
	for(i = 0 ; i < events.length ; i++){
		if((month == events[i][0]) && (date == events[i][1])){
			str += '<p class=\'event\'>';
			str += events[i][2];
			str += '<br>';
			str += events[i][3];
			str += '</p>';
		}
	}

	return str;
}

function get_calendar(){
	var str = '';
	str += get_heading();
	str += '<p width=\'100%\'>';
	str += '<table class=\'schedule\'>';
	str += get_title();
	str += get_dates();
	str += '</table>';
	str += '</p>';
	document.write(str);
}


function get_heading(){
	var month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var str = '';
	str += '<h3 class=\'heading\'>';
	str += month_list[get_month()];
	str += ' ';
	str += get_year();
	str += '</h3>';
	return str;
}


function get_title(){
	var str = '';
	str += '<tr>';
	str += '<th>SUN</th>';
	str += '<th>MON</th>';
	str += '<th>TUE</th>';
	str += '<th>WED</th>';
	str += '<th>THU</th>';
	str += '<th>FRI</th>';
	str += '<th>SAT</th>';
	str += '</tr>';
	return str;
}


function get_dates(){
	var str = '';
	var date = 1;
	var count = 0;

	str += '<tr>';

	while(date == 1){
		if(count == get_first_day()){
			str += get_date(date);
			count++;
			date++;
		}
		else{
			str += '<td></td>';
			count++;
		}
	}

	for( ; count < 7 ; count++, date++){
		str += get_date(date);
	}

	str += '</tr>';

	while(date <= get_number_of_month_day()){
		str += '<tr>';

		for(count = 0 ; count < 7 ; count++, date++){
			if(date <= get_number_of_month_day()){
				str += get_date(date);
			}
			else{
				str += '<td></td>';
			}
		}

		str += '</tr>';
	}

	return str;
}


function get_date(date){
	var today = new Date();
	var str = '';
	if(today.getDate() == date){
		str += '<td ';
		str += 'class=\'today\'>';
		str += '<p class=\'date\'>';
		str += date;
		str += '</p>';
		str += isEvent(today.getMonth()+1, date);
		str += '</td>';
	}
	else{
		str += '<td>';
		str += '<p class=\'date\'>';
		str += date;
		str += '</p>';
		str += isEvent(today.getMonth()+1, date);
		str += '</td>';
	}
	return str;
}


function get_year(){
	var today = new Date();
	return today.getFullYear();
}


function get_month(){
	var today = new Date();
	return today.getMonth();
}


function get_first_day(){
	var today = new Date();
	var date = today.getDate();
	var temp1 = date % 7;
	temp1 -= 7;
	var count = 0;
	while(temp1 < 0){
		temp1 += 1;
		count += 1;
	}
	var day = today.getDay();
	day += count;
	day = day % 7;
	day += 1;
	return (day % 7);
}


function get_number_of_month_day(){
	var today = new Date();
	var month = today.getMonth();
	if((month == 0) || (month == 2) || (month == 4) || (month == 6) || (month == 7) || (month == 9) || (month == 11)){
		return 31;
	}
	else if(month == 1){
		return 28;
	}
	else{
		return 30;
	}
}

