export function initClickSpark(color = '#00e5ff', count = 12) {
    const canvas = document.createElement('canvas');
    canvas.id = 'spark-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    const particles = [];

    class Particle {
        constructor(x, y, c) {
            this.x = x;
            this.y = y;
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 5;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.life = 1;
            this.decay = 0.025 + Math.random() * 0.03;
            this.size = 2 + Math.random() * 4;
            this.color = c;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.15;
            this.life -= this.decay;
            this.vx *= 0.97;
            this.vy *= 0.97;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(this.life, 0);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, Math.max(0, this.size * this.life), 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const COLORS = ['#00e5ff', '#7c5cfc', '#f5c842', '#4cff9a', '#ff5f7a'];

    const handleClick = (e) => {
        for (let i = 0; i < count; i++) {
            particles.push(
                new Particle(
                    e.clientX,
                    e.clientY,
                    COLORS[Math.floor(Math.random() * COLORS.length)]
                )
            );
        }
    };

    document.addEventListener('click', handleClick);

    function loop() {
        ctx.clearRect(0, 0, W, H);

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].life <= 0) particles.splice(i, 1);
        }

        requestAnimationFrame(loop);
    }

    loop();

    // ✅ CLEANUP (important in React)
    return () => {
        document.removeEventListener('click', handleClick);
        document.body.removeChild(canvas);
    };
}