import { useCallback, useRef } from "react";

import { useAccessibility } from "../hooks/useAccessibility";

export function HoverTilt({inverseIntensity = 30, className = "", children}:
	{
		inverseIntensity?: number,
		className?: string,
		children: React.ReactNode | React.ReactNode[]
	}
) {
	const { prefersReducedMotion } = useAccessibility();

	const rectRef = useRef<HTMLDivElement>(null);
	const transformRef = useRef<HTMLDivElement>(null);
	
	const transform = useCallback((mouseX: number, mouseY: number) => {
		if (!transformRef.current || !rectRef.current) return;
		
		const rect = rectRef.current.getBoundingClientRect();
		const degX = -(mouseY - rect.y - rect.height / 2) * inverseIntensity / rect.height;
		const degY = (mouseX - rect.x - rect.width / 2) * inverseIntensity / rect.width;

		transformRef.current.style.transform = `perspective(1000px) rotateX(${degX}deg) rotateY(${degY}deg)`;
	}, []);

	return <div
		ref={rectRef}
		// TODO: make drop shadow more visible
		className={`motion-safe:hover:scale-105 hover:drop-shadow-lg transition-all duration-300 ${className}`}
		onMouseMove={event => {
			if (prefersReducedMotion === "reduce") return;
			window.requestAnimationFrame(() => {
				transform(event.clientX, event.clientY);
			});
		}}
		onMouseLeave={() => {
			window.requestAnimationFrame(() => {
				if (prefersReducedMotion === "reduce") return;
				if (!transformRef.current) return;
				transformRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
			});
		}}
	>
		<div ref={transformRef} style={{transition: "transform 0.3s ease-out"}}>
			{children}
		</div>
	</div>
}