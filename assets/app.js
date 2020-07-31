$(document).ready(function () {
  // Put current date in header
  $('#currentDay').text(moment().format('ll'))
  // Put current time in header
  $('#currentTime').text(moment().format('LT'))


  // Array to store the day's schedule in. Each object represents a single hour block of the day, whether that time slot is available (Busy = false) or not, and the text of any event scheduled for that time slot (default value = empty).
  let schedule = [
    {
      time: moment().hour(9).format('HH'),
      dispTime: moment().startOf('day').add(9, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(10).format('HH'),
      dispTime: moment().startOf('day').add(10, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(11).format('HH'),
      dispTime: moment().startOf('day').add(11, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(12).format('HH'),
      dispTime: moment().startOf('day').add(12, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(13).format('HH'),
      dispTime: moment().startOf('day').add(13, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(14).format('HH'),
      dispTime: moment().startOf('day').add(14, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(15).format('HH'),
      dispTime: moment().startOf('day').add(15, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(16).format('HH'),
      dispTime: moment().startOf('day').add(16, 'hours').format('h:ss a'),
      event: ''
    },
    {
      time: moment().hour(17).format('HH'),
      dispTime: moment().startOf('day').add(17, 'hours').format('h:ss a'),
      event: ''
    }
  ]

  // variable to let me set a psuedo "current" time that I can use to test functionality against
  let fakeTime = moment().hour(13).format('HH')

  // moment().minutes(00).format('h')
  let status = ''
  // console.log(parseInt(fakeTime))
  // console.log(moment().startOf('day').add(13, 'hours').format('h:ss a'))
  // console.log(parseInt(schedule[0].time))
  // console.log(schedule[0].dispTime)


  for (let i = 0; i < schedule.length; i++) {
    console.log(schedule[i].time < fakeTime)
    console.log(schedule[i].dispTime < fakeTime)
    console.log('loop')
    if (schedule[i].time < fakeTime) {
      status = 'past'
    } else if (schedule[i].time === fakeTime) {
      status = 'present'
    } else {
      status = 'future'
    }
    // console.log(moment(schedule[i].dispTime))

    $('#planner').append(`
    <div id="${i}" class="row time-block">
      <div class="col-md-1 hour">
        ${schedule[i].dispTime}
      </div>
      <textarea class="col-md-10 ${status} description"></textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>
    `)
  }


  $('.saveBtn').click(function () {
    let value = $(this).siblings(".description").val()
    console.log(value)
    let time = $(this).parents().attr('id')
    console.log(time)

    localStorage.setItem(time, value)
  })

  for (let i = 0; i < schedule.length; i++) {
    $(`#${i} .description`).val(localStorage.getItem(i))
  }
})