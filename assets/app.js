$(document).ready(function () {
  // Put current date in header
  $('#currentDay').text(moment().format('ll'))
  // Put current time in header
  $('#currentTime').text(moment().format('LT'))


  // Array to store the day's schedule in. Each object represents a single hour block of the day.
  let schedule = [
    {
      // time used for calculations here in the JS file
      time: moment().hour(9).format('HH'),
      // time used to display in the planner
      dispTime: moment().startOf('day').add(9, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(10).format('HH'),
      dispTime: moment().startOf('day').add(10, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(11).format('HH'),
      dispTime: moment().startOf('day').add(11, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(12).format('HH'),
      dispTime: moment().startOf('day').add(12, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(13).format('HH'),
      dispTime: moment().startOf('day').add(13, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(14).format('HH'),
      dispTime: moment().startOf('day').add(14, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(15).format('HH'),
      dispTime: moment().startOf('day').add(15, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(16).format('HH'),
      dispTime: moment().startOf('day').add(16, 'hours').format('h:ss a'),
    },
    {
      time: moment().hour(17).format('HH'),
      dispTime: moment().startOf('day').add(17, 'hours').format('h:ss a'),
    }
  ]

  // variable representing the current time
  let currentTime = moment().format('HH')

  // variable used in the loop below to determine if an hour is in the past, present, or future
  let status = ''

  // for each hour...
  for (let i = 0; i < schedule.length; i++) {
    // see if that hour in the schedule is less than the current time...
    if (schedule[i].time < currentTime) {
      // if so, mark that time as in the past
      status = 'past'
      // otherwise, see if the hour in the schedule is equal to the current time...
    } else if (schedule[i].time === currentTime) {
      // if so, mark that time as the present
      status = 'present'
      // otherwise, that means that the time must be in the future. Mark it as future.
    } else {
      status = 'future'
    }

    // add each row of the planner, one at a time, and mark the past/present/future appropriately (uses css formatting applied to the status)
    // first div is the left column of displayed times
    // text area is where the user can enter events. Color coded: red = present, green = future, and grey = past
    // button is the right column that allows users to save their events
    $('#planner').append(`
    <div id="${i}" class="row">
      <div class="col-md-1 hour">
        ${schedule[i].dispTime}
      </div>
      <textarea class="col-md-10 ${status} description"></textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>
    `)
  }

  // actions to complete when each save button is clicked. The text for the event is saved to the local storage.
  $('.saveBtn').click(function () {
    // sets the text of the event be saved from the textarea of the same row as the button
    let value = $(this).siblings(".description").val()
    // sets the time of the event as the time written into the id of the div that starts the row that the button is in
    let time = $(this).parents().attr('id')
    // stores it all in local storage
    localStorage.setItem(time, value)
  })

  // loop to recall the individual events from localStorage upon revisiting/refreshing the site
  for (let i = 0; i < schedule.length; i++) {
    $(`#${i} .description`).val(localStorage.getItem(i))
  }
})