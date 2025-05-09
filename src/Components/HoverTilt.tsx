import { type MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import { useAccessibility } from "~/Hooks/useAccessibility";

interface HoverTiltProps extends React.HTMLAttributes<HTMLDivElement> {
	intensity?: number;
	/** Measured in px, e.g. `${perspective}px` */
	perspective?: number;
	allowDeviceRotation?: boolean;
	/** Measured in degrees */
	deviceRotationExtents?: {
		/** -90 = upsidedown, 0 = facing ceilinng, 90 = facing user */
		betaMin: number;
		/** -90 = upsidedown, 0 = facing ceilinng, 90 = facing user */
		betaMax: number;
		/** -90 = facing left, 0 = facing user, 90 = facing right */
		gammaMin: number;
		/** -90 = facing left, 0 = facing user, 90 = facing right */
		gammaMax: number;
	};
	disableShadow?: boolean;
}

export function HoverTilt({
	intensity = 20,
	perspective = 1000,
	allowDeviceRotation = true,
	// 89 to avoid gimbal lock
	deviceRotationExtents = {betaMin: 45, betaMax: 89, gammaMin: -30, gammaMax: 30},
	disableShadow = false,
	className = "",
	children,
	...props
}: HoverTiltProps) {
	const { prefersReducedMotion } = useAccessibility();

	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const [hasRotation, setHasRotation] = useState(false);
	const [animationFrame, setAnimationFrame] = useState<number>();
	const [useOrientation, setUseOrientation] = useState(false);

	const getRect = useCallback(() => outerRef.current?.getBoundingClientRect(), []);

	const applyTransform = useCallback((offsetX: number, offsetY: number) => {
		const rect = getRect();
		if (rect === undefined || innerRef.current === null) return;		

		// Compensate for aspect ratio
		const degX = -offsetY * 2 * intensity * (rect.height / rect.width);
		const degY = offsetX * 2 * intensity * (rect.width / rect.height);

		const hasRotationForCurrentFrame = degX !== 0 || degY !== 0;
		if (hasRotationForCurrentFrame !== hasRotation) setHasRotation(hasRotationForCurrentFrame);

		innerRef.current.style.transform = `perspective(${perspective}px) rotateX(${degX}deg) rotateY(${degY}deg)`;
	}, [getRect, intensity, hasRotation, perspective]);

	const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
		if (prefersReducedMotion === "reduce" || useOrientation || animationFrame !== undefined) return;

		const rect = getRect();
		if (rect === undefined) return;

		const { clientX: mouseX, clientY: mouseY } = event;
		const offsetX = (mouseX - rect.left) / rect.width - 0.5;
		const offsetY = (mouseY - rect.top) / rect.height - 0.5;

		setAnimationFrame(window.requestAnimationFrame(() => {
			applyTransform(offsetX, offsetY);
			setAnimationFrame(undefined);
		}));
	}, [animationFrame, prefersReducedMotion, setAnimationFrame, applyTransform, getRect]);

	const handleMouseLeave = useCallback(() => {
		if (prefersReducedMotion === "reduce" || useOrientation) return;

		setAnimationFrame(window.requestAnimationFrame(() => {
			applyTransform(0, 0);
			setAnimationFrame(undefined);
		}));
	}, [prefersReducedMotion, setAnimationFrame, applyTransform]);

	useEffect(() => {
		if (prefersReducedMotion === "reduce" || !allowDeviceRotation) return;

		let supportsOrientation = false;

		function handleOrientation(event: DeviceOrientationEvent) {
			if (
				event.beta === null
				|| event.gamma === null
				|| innerRef.current === null
				|| outerRef.current === null
				|| animationFrame !== undefined
			) return;

			if (!supportsOrientation) {
				supportsOrientation = true;
				setUseOrientation(true);
			}

			const { betaMin, betaMax, gammaMin, gammaMax } = deviceRotationExtents;
			const offsetX = Math.max(-.5, Math.min(.5, (event.gamma - gammaMin) / (gammaMax - gammaMin) - .5));
			const offsetY = Math.max(-.5, Math.min(.5, (event.beta - betaMin) / (betaMax - betaMin) - .5));

			setAnimationFrame(window.requestAnimationFrame(() => {
				applyTransform(offsetX, offsetY);
				setAnimationFrame(undefined);
			}));
		}

		window.addEventListener("deviceorientation", handleOrientation, true);
		return () => window.removeEventListener("deviceorientation", handleOrientation);
	}, [
		prefersReducedMotion,
		allowDeviceRotation,
		setUseOrientation,
		deviceRotationExtents,
		setAnimationFrame,
		applyTransform
	]);

	return <div
		ref={outerRef}
		data-has-rotation={hasRotation}
		className={
			"motion-safe:data-[has-rotation=true]:scale-105 "
			+ (disableShadow ? "" : "motion-safe:data-[has-rotation=true]:drop-shadow-heavy ")
			+ "transition-all duration-300 " + className
		}
		onMouseMove={handleMouseMove}
		onMouseLeave={handleMouseLeave}
		{...props}
	>
		<div
			ref={innerRef}
			style={{transition: "transform 0.3s ease-out"}}
		>
			{children}
		</div>
	</div>;
}
