// cute calendar icon to click to save event
let addBtn = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-calendar-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path fill-rule="evenodd" d="M7.5 9.5A.5.5 0 0 1 8 9h2a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
</svg>`

// cute edit icon to click to edit event
let editBtn = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>`


// Put current date in header
$('#currentDay').text(moment().format('ll'))
// Put current time in header
$('#currentTime').text(moment().format('LT'))


// Array to store the day's schedule in. Each object represents a single hour block of the day, whether that time slot is available (Busy = false) or not, and the text of any event scheduled for that time slot (default value = empty).
let schedule = [
  {
    time: moment().hour(9).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(10).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(11).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(12).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(13).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(14).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(15).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(16).format('h'),
    busy: false,
    event: ''
  },
  {
    time: moment().hour(17).format('h'),
    busy: false,
    event: ''
  }
]

// variable to let me set a psuedo "current" time that I can use to test functionality against
let testTime = moment().format('h')

console.log(parseInt(schedule[0].time))
console.log(parseInt(testTime))

console.log(schedule < moment().format('h'))

