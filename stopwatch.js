
const displayEl = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let intervalId = null;
let currentSeconds = 0;
const STEP = 3;
const LIMIT = 30;
const TICK_MS = 1000;
// Renders the current time in seconds
function render() {
    displayEl.textContent = String(currentSeconds) + ' s';
}
// Advances the stopwatch by STEP seconds
function tick() {
    const next = currentSeconds + STEP;
    if (next >= LIMIT) {
        currentSeconds = LIMIT;
        render();
        stop();
        return;
    }
    currentSeconds = next;
    render();
}
// Starts the stopwatch
function start() {
    if (intervalId !== null) return; // prevent multiple intervals
    if (currentSeconds >= LIMIT) return; // already at limit, do not start
    intervalId = setInterval(tick, TICK_MS);
}
// Stops the stopwatch
function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
// Resets the stopwatch
function reset() {
    stop();
    currentSeconds = 0;
    render();
}

render();

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);



