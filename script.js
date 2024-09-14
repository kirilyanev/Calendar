// Get full date, month and day
const mainDate = new Date();
const monthNumber = mainDate.getMonth();
const today = mainDate.getDate();
const year = mainDate.getFullYear();

const monthElement = document.querySelector('#month');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function createCalendar(year, month) {
  const calendar = document.getElementById("calendar");

  // Set the month
  monthElement.textContent = `${months[monthNumber]} ${year}`;

  // Get the number of days in the month
  const numDays = new Date(year, month + 1, 0).getDate();

  // Get the first day of the month (0 - Sunday, 1 - Monday, etc.)
  const firstDay = new Date(year, month, 1).getDay();

  // Create a table
  const table = document.createElement("table");
  calendar.appendChild(table);

  // Create the header row
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    const th = document.createElement("th");
    th.textContent = daysOfWeek[i];
    headerRow.appendChild(th);
  }

  // Create the calendar cells
  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        const td = document.createElement("td");
        row.appendChild(td);
      } else if (date > numDays) {
        break;
      } else {
        const td = document.createElement("td");
        td.textContent = date;
        if (date === today) {
          td.setAttribute('id', 'today');
        }
        row.appendChild(td);
        date++;
      }
    }

    table.appendChild(row);
  }
}

// Get current month
const currentMonth = mainDate.getMonth();

// Usage example: create a calendar for current month
createCalendar(year, currentMonth);
