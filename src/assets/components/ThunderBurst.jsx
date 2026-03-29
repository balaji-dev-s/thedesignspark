import { useEffect } from "react";

export default function ThunderBurst() {
    useEffect(() => {
        const canvas = document.createElement("canvas");
        canvas.id = "thunder-burst";
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        let W = canvas.width = window.innerWidth;
        let H = canvas.height = window.innerHeight;

        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "999999";

        window.addEventListener("resize", () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        });

        const bolts = [];

        class Bolt {
            constructor(x, y, angle) {
                this.x = x;
                this.y = y;
                this.angle = angle;
                this.life = 1;
                this.length = 50 + Math.random() * 40; //radius
            }

            draw() {
                ctx.save();

                ctx.strokeStyle = "#469d4e";
                ctx.lineWidth = 2 + Math.random() * 2;
                ctx.shadowBlur = 25;
                ctx.shadowColor = "#00ffcc";

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);

                let x = this.x;
                let y = this.y;

                const steps = 6; //more segments = longer bolt

                for (let i = 0; i < steps; i++) {
                    const progress = i / steps;

                    //extend outward
                    x = this.x + Math.cos(this.angle) * this.length * progress;
                    y = this.y + Math.sin(this.angle) * this.length * progress;

                    //jagged randomness
                    x += (Math.random() - 0.5) * 12;
                    y += (Math.random() - 0.5) * 12;

                    ctx.lineTo(x, y);
                }

                ctx.stroke();
                ctx.restore();

                this.life -= 0.06;
            }
        }

        const handleClick = (e) => {
            const { clientX, clientY } = e;

            //FULL 360° thunder explosion
            const totalBolts = 10; // increase for more intensity

            for (let i = 0; i < totalBolts; i++) {
                // const angle = (Math.PI * 2 * i) / totalBolts;
                const angle = ((Math.PI * 2 * i) / totalBolts) + (Math.random() - 0.5) * 0.5;
                bolts.push(new Bolt(clientX, clientY, angle));
            }
        };

        document.addEventListener("click", handleClick);

        function loop() {
            ctx.clearRect(0, 0, W, H);

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
    }, []);

    return null;
}