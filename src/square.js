document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#number').addEventListener('change', (e) => {
        const num = Number(e.target.value);
        const magicsquare = document.querySelector('#magicsquare');
        if (!(num & 1)) {
            magicsquare.style.width = `100vw`;
            magicsquare.innerHTML = '<div class="center-align"><h3><b>Enter only Odd numbers</b></h3></div>';
            return;
        }
        let div = '';
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                div += `<a class="waves-effect waves-light btn"  style="opacity:0;" id=squareI${i}J${j}>0</a>`;
            }
            div += `<br>`;
        }
        magicsquare.innerHTML = div;
        magicsquare.style.width = `${5*num}em`;
        createSquare(num);
    });
    async function createSquare(r) {
        let i, j;
        const c = r;
        let n = 1;
        for (i = 0, j = Math.floor(c / 2); n <= r * r; i = i - 1, j++ , n++) {
            if ((i < 0) && (j >= c)) {
                i += 2;
                j = j - 1;
                document.querySelector(`#squareI${i}J${j}`).textContent = n;
            }
            else if ((i < 0) && (j < c)) {
                i = r - 1;
                document.querySelector(`#squareI${i}J${j}`).textContent = n;
            }
            else if ((i < r) && (j >= c)) {
                j = 0;
                document.querySelector(`#squareI${i}J${j}`).textContent = n;
            }
            else if (document.querySelector(`#squareI${i}J${j}`).textContent == "0") {
                document.querySelector(`#squareI${i}J${j}`).textContent = n;
            }
            else {
                i += 2;
                j -= 1;
                document.querySelector(`#squareI${i}J${j}`).textContent = n;
            }
            await sleep(300);
            document.querySelector(`#squareI${i}J${j}`).style.opacity = 1;
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});