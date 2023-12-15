function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const [alarmHours, alarmMinutes] = alarmTime.split(':');

    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        if (hours === alarmHours && minutes === alarmMinutes) {
            alert('Alarm! Wake tha fuck up!!!');
        }
    }, 1000);
}
setInterval(updateClock, 1000);
updateClock();