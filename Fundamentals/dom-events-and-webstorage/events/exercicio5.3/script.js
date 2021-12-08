function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let grabDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index++) {
    let day = dezDaysList[index];
    let elementDay = document.createElement('li');

    if (day === 24 || day === 31) {
        elementDay.ClassName = 'day holiday';
        elementDay.innerHTML = day;
        grabDaysList.appendChild(elementDay);
      } else if (day === 4 || day === 11 || day === 18) {
        elementDay.className = 'day friday';
        elementDay.innerHTML = day;
      } else if (day === 25) {
        elementDay.className = 'day holiday friday';
        elementDay.innerHTML = day;
        grabDaysList.appendChild(elementDay);
      } else {
        elementDay.className = 'day'
        elementDay.innerHTML = day;
        grabDaysList.appendChild(elementDay);
      }
  }
}

createDaysOfTheMonth();

function createHolidayBtn(feriados) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonID = 'btn-holiday';

  button.innerHTML = feriados;
  button.id = buttonID;
  buttonContainer.appendChild(button);
}

createHolidayBtn('Holidays');