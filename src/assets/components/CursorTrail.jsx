import { useEffect } from "react";

export default function CursorTrail() {
    useEffect(() => {
        const canvas = document.createElement("canvas");
        canvas.id = "cursor-trail";
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

        const sparks = [];

        class Spark {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.life = 1;
                this.size = 2 + Math.random() * 3;
                this.color = Math.random() > 0.5 ? "#00ffcc" : "#00ffcc";
            }

            update() {
                this.life -= 0.03;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const handleMove = (e) => {
            for (let i = 0; i < 2; i++) {
                sparks.push(new Spark(e.clientX, e.clientY));
            }
        };

        document.addEventListener("mousemove", handleMove);

        function loop() {
            ctx.clearRect(0, 0, W, H);

            for (let i = sparks.length - 1; i >= 0; i--) {
                sparks[i].update();
                sparks[i].draw();
                if (sparks[i].life <= 0) sparks.splice(i, 1);
            }

            requestAnimationFrame(loop);
        }

        loop();

        return () => {
            document.removeEventListener("mousemove", handleMove);
            document.body.removeChild(canvas);
        };
    }, []);

    return null;
}