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

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function mouseEnter(e) {
  e.target.style.fontSize = '28px';
}

function mouseLeave(e) {
  e.target.style.fontSize = '20px';
}

const weekDay = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  const dayItem = document.createElement('li');
  dayItem.classList.add('day');

  function especialDate(className) {
    dayItem.classList.add(className);
    dayItem.innerText = dezDaysList[i];
    dayItem.addEventListener('mouseenter', mouseEnter);
    dayItem.addEventListener('mouseleave', mouseLeave);
    weekDay.appendChild(dayItem);
  }

  switch (dezDaysList[i]) {
    case 4:
      especialDate('friday');
      break;
    case 11:
      especialDate('friday');
      break;
    case 18:
      especialDate('friday');
      break;
    case 24:
      especialDate('holiday');
      break;
    case 25:
      especialDate('holiday');
      especialDate('friday');
      break;
    case 31:
      especialDate('holiday');
      break;

    default:
      especialDate('day');
      break;
  }
}

function btnFeriados() {
  const holidaysList = document.querySelectorAll('.holiday');

  for (let i = 0; i < holidaysList.length; i+=1) {

    if (holidaysList[i].style.backgroundColor === 'rgb(127, 255, 0)') {
      holidaysList[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    else{
      holidaysList[i].style.backgroundColor = 'rgb(127,255,0)';
    }
  }
}

function holiday(holidays) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = holidays;
  btn.id = 'btn-holiday';
  btn.addEventListener('click', btnFeriados);
  buttonsContainer.appendChild(btn);
}
holiday('Feriados');

function btnfridays() {
  const fridays = document.querySelectorAll('.friday');
  
  for (let i = 0; i < fridays.length; i+=1){

    if (fridays[i].innerText === "Sextou!!!") {
      const previousDayNumber = parseInt(fridays[i].previousElementSibling.innerText);
      fridays[i].innerText = previousDayNumber + 1;
      
    }else{
        fridays[i].innerText = "Sextou!!!";
    }
  }
}

function friday(fridays) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = fridays;
  btn.id = 'btn-friday';
  btn.addEventListener('click', btnfridays);
  buttonsContainer.appendChild(btn);
}
friday('Sexta-feira');

function addTask(task) {
  const taskContainer = document.querySelector('.my-tasks');
  const taskElement = document.createElement('span');
  taskElement.innerText = task;
  taskContainer.appendChild(taskElement);
}

addTask('Cozinhar');

function selectedTask(element) {
  element.target.classList.toggle('selected');
}

function colors(cor) {
  const taskContainer = document.querySelector('.my-tasks');
  const colorElement = document.createElement('div');
  colorElement.classList.add('task');
  colorElement.style.backgroundColor = cor;
  colorElement.addEventListener('click', selectedTask);
  taskContainer.appendChild(colorElement);
}

colors('rgb(255,165,0)');
