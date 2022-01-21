import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const pickerEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button')
const valueEl = document.querySelector('.value')


buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
       if (selectedDates[0] <= options.defaultDate) {
        window.alert("Please choose a date in the future");
        buttonEl.disabled = true;
    } else {
        buttonEl.disabled = false;
    }
      
  },
};


buttonEl.addEventListener('click', evt => {


})



flatpickr(pickerEl, options)






