
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {

        var size = 180;
        var scale = .8;
        var pieces = 35;
        var angle = 15;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        var width, height;

        var bufferCanvas = document.createElement('canvas');
        var bufferContext = bufferCanvas.getContext('2d');

        window.addEventListener('resize', resize);
        resize();

        function resize() {
            let limit = 600;
            let maxWidth = window.innerWidth > limit ? limit : window.innerWidth;
            let maxHeight = window.innerHeight > limit ? limit : window.innerHeight;
            width = bufferCanvas.width = canvas.width = maxWidth;
            height = bufferCanvas.height = canvas.height = maxHeight;
            bufferContext.translate(width * 0.5, height);
        }

        function draw() {
            requestAnimationFrame(draw);

            angle += ((window.innerWidth < 500) ? .0015 : .003);

            var points = [];

            // Clear canvas
            bufferContext.save();
            bufferContext.setTransform(1, 0, 0, 1, 0, 0);
            bufferContext.clearRect(0, 0, width, height);
            bufferContext.restore();

            var side1 = width * 0.4;
            var side2 = height * 0.4;
            var radius = Math.sqrt(side1 * side1 + side2 * side2);

            // Draw stem
            bufferContext.beginPath();
            bufferContext.moveTo(0, 0);
            bufferContext.arc(0, -size * scale, radius, 0, Math.TAU);
            bufferContext.lineTo(0, -size * scale);
            bufferContext.stroke();

            drawShape({ x: 0, y: -size * scale, angle: -Math.PI * 0.5, size: size });

            for (var i = 0; i < 10; i++) {
                for (var j = points.length - 1; j >= 0; j--) {
                    drawShape(points.pop());
                }
            }

            function drawShape(point) {
                drawSpoke(point, 1);
                drawSpoke(point, -1);
            }

            function drawSpoke(point, direction) {
                var color = direction === -1 ? "#85BBFD" : "#1E6DCE";

                var branchAngle = point.angle + (angle * direction);
                var size = point.size * scale;
                var x = point.x + Math.cos(branchAngle) * size;
                var y = point.y + Math.sin(branchAngle) * size;

                bufferContext.beginPath();
                bufferContext.strokeStyle = color;
                bufferContext.moveTo(point.x, point.y);
                bufferContext.bezierCurveTo(point.x, y, x, point.y, x, y);

                bufferContext.lineTo(x, y);
                bufferContext.stroke();

                points.unshift({ x: x, y: y, angle: branchAngle, size: size });
            }

            var side1 = width * 0.3;
            var side2 = height * 0.3;
            var radius = Math.sqrt(side1 * side1 + side2 * side2);

            bufferContext.globalCompositeOperation = 'destination-atop';
            bufferContext.beginPath();

            bufferContext.arc(0, 0, radius, -(Math.PI * 0.5 + (Math.PI / pieces)), -(Math.PI * 0.5 - (Math.PI / pieces)));
            bufferContext.lineTo(0, 0);
            bufferContext.closePath();
            bufferContext.fillStyle = "#282c34";
            bufferContext.fill();
            bufferContext.globalCompositeOperation = 'source-over';

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, width, height);
            context.translate(width * 0.5, height * 0.5);

            for (var i = 0; i < pieces; i++) {
                context.rotate(Math.PI * 2 / pieces);
                context.drawImage(bufferCanvas, -width * 0.5, -height);
            }

        }

        draw();
    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas