export function initThunderClick() {
    const canvas = document.createElement("canvas");
    canvas.id = "thunder-canvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999999";

    const particles = [];
    const bolts = [];

    const COLORS = ["#00ffcc", "#00e5ff", "#00ff88"]; // green + blue

    class Particle {
        constructor(x, y) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 3 + Math.random() * 4;

            this.x = x;
            this.y = y;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.life = 1;
            this.decay = 0.02;
            this.size = 2 + Math.random() * 3;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.1;
            this.life -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.color;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    class Bolt {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.life = 1;
        }

        draw() {
            ctx.save();
            ctx.strokeStyle = "#00e5ff";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 20;
            ctx.shadowColor = "#00ffcc";

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);

            let x = this.x;
            let y = this.y;

            for (let i = 0; i < 10; i++) {
                x += (Math.random() - 0.5) * 30;
                y += 15;
                ctx.lineTo(x, y);
            }

            ctx.stroke();
            ctx.restore();

            this.life -= 0.1;
        }
    }

    const handleClick = (e) => {
        const { clientX, clientY } = e;

        // create particles
        for (let i = 0; i < 20; i++) {
            particles.push(new Particle(clientX, clientY));
        }

        // create lightning
        bolts.push(new Bolt(clientX, clientY));
    };

    document.addEventListener("click", handleClick);

    function loop() {
        ctx.clearRect(0, 0, W, H);

        // particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].life <= 0) particles.splice(i, 1);
        }

        // lightning
        for (let i = bolts.length - 1; i >= 0; i--) {
            bolts[i].draw();
            if (bolts[i].life <= 0) bolts.splice(i, 1);
        }

        requestAnimationFrame(loop);
    }

    loop();

    return () => {
        document.removeEventListener("click", handleClick);
        document.body.removeChild(canvas);
    };
}