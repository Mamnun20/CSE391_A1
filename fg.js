const fortunes = [
    "You will get a pat from a cat",
    "Your road to glory will be rocky",
    "You will get CG4!just in your dreams",
    "Finish your task before your task finishes you.",
    "You will find your hidden talent,keep it hidden",
    "Just know that even if you don't feel like it, someone loves you.",
    "You will suffer greatly in the near future, MIDTERMS are coming.",
    "Keep believing and you will succeed",
    "An exciting opportunity will present itself in the coming weeks.",
    "Shoot your shot, you miss 100% of the chances you don't take.",
    "Tonight you will feel sleepy, so sleep",
];
//storing fortunes

const styles = [
    {
        fontColor: '#856404',
        backgroundColor: '#fff3cd',
        borderColor: '#ffc107',
        fontSize: '1.3em',
        fontFamily: "'Georgia', serif"
    },
    {
        fontColor: '#721c24',
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        fontSize: '1.4em',
        fontFamily: "'Courier New', monospace"
    },
    {
        fontColor: '#004085',
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff',
        fontSize: '1.2em',
        fontFamily: "'Arial', sans-serif"
    },
    {
        fontColor: '#155724',
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
        fontSize: '1.35em',
        fontFamily: "'Verdana', sans-serif"
    }
];

// Function to get a random fortune
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Function to display a random fortune
function displayFortune() {
    const fortuneBox = document.getElementById('fortuneBox');
    const randomFortune = getRandomFortune();
    fortuneBox.textContent = randomFortune;
    console.log('Fortune displayed:', randomFortune);
}

// Function to change style based on button clicked
function changeStyle(styleNumber) {
    const fortuneBox = document.getElementById('fortuneBox');
    const style = styles[styleNumber - 1];
    
    // Apply the style
    fortuneBox.style.color = style.fontColor;
    fortuneBox.style.backgroundColor = style.backgroundColor;
    fortuneBox.style.borderColor = style.borderColor;
    fortuneBox.style.fontSize = style.fontSize;
    fortuneBox.style.fontFamily = style.fontFamily;
    
    // Debug message
    console.log('Style changed to:', styleNumber);
    console.log('Applied styles:', style);
}

// Display fortune when page loads
window.onload = function() {
    displayFortune();
    console.log('Page loaded successfully!');
    console.log('Total fortunes available:', fortunes.length);
};

// Debug: Show alert on page load (optional - can be removed)
// alert('Fortune Generator Loaded! Your fortune awaits...');