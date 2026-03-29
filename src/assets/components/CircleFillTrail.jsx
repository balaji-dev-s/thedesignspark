import { useEffect } from "react";

export default function CircleFillTrail() {
    useEffect(() => {
        let canvas, ctx, animationId;
        let bubbles = [];
        let mouseX = 0, mouseY = 0;

        const COUNT = 12;

        const isMobile = () =>
            window.innerWidth <= 768 ||
            !window.matchMedia("(hover: hover)").matches;

        const init = () => {
            if (isMobile() || canvas) return;

            canvas = document.createElement("canvas");
            canvas.id = "bubble-trail";
            document.body.appendChild(canvas);

            ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            canvas.style.position = "fixed";
            canvas.style.top = "0";
            canvas.style.left = "0";
            canvas.style.pointerEvents = "none";
            canvas.style.zIndex = "999999";

            mouseX = canvas.width / 2;
            mouseY = canvas.height / 2;

            bubbles = [];

            for (let i = 0; i < COUNT; i++) {
                bubbles.push({
                    x: mouseX,
                    y: mouseY,
                    size: 6 + Math.random() * 6,
                });
            }

            document.addEventListener("mousemove", handleMove);
            loop();
        };

        const destroy = () => {
            if (!canvas) return;

            cancelAnimationFrame(animationId);
            document.removeEventListener("mousemove", handleMove);
            canvas.remove();

            canvas = null;
            bubbles = [];
        };

        const handleMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const loop = () => {
            if (!canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bubbles[0].x += (mouseX - bubbles[0].x) * 0.4;
            bubbles[0].y += (mouseY - bubbles[0].y) * 0.4;

            for (let i = 1; i < bubbles.length; i++) {
                bubbles[i].x += (bubbles[i - 1].x - bubbles[i].x) * 0.4;
                bubbles[i].y += (bubbles[i - 1].y - bubbles[i].y) * 0.4;
            }

            bubbles.forEach((b, i) => {
                ctx.save();

                ctx.globalAlpha = 1 - i / bubbles.length;

                const gradient = ctx.createRadialGradient(
                    b.x, b.y, 0,
                    b.x, b.y, b.size * 2
                );

                gradient.addColorStop(0, "#469d4e");
                gradient.addColorStop(0.5, "#00ff91");
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;

                ctx.beginPath();
                ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            });

            animationId = requestAnimationFrame(loop);
        };

        const handleResize = () => {
            if (isMobile()) {
                destroy(); // remove on mobile
            } else {
                init(); // re-init on desktop
            }
        };

        // initial run
        init();

        window.addEventListener("resize", handleResize);

        return () => {
            destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return null;
}