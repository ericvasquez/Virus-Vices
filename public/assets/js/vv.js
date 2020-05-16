$(function () {
  $('.join-gameroom').on('click', (event) => {
    console.log('player was clciked!')
    $.ajax('/api/gameroom', {
      type: 'GET'
    })
  })
})
