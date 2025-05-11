import { type AutoplayType } from "embla-carousel-autoplay";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { Button, type ButtonProps } from "./Button";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
}

interface CarouselContextProps extends CarouselProps {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	isAutoplayEnabled: boolean;
	startAutoplay: () => void;
	resetAutoplay: () => void;
	stopAutoplay: () => void;
	toggleAutoplay: () => void;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

export function useCarousel() {
	const context = useContext(CarouselContext);

	if (context === undefined) throw new Error("useCarousel must be used within a <Carousel/>");

	return context;
}

interface CarouselComponentProps extends React.HTMLAttributes<HTMLDivElement>, CarouselProps {};

export function Carousel({
	orientation = "horizontal",
	opts,
	setApi,
	plugins,
	className = "",
	children,
	...props
}: CarouselComponentProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === "horizontal" ? "x" : "y",
		},
		plugins
	);

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);

	const onSelect = useCallback((api: CarouselApi) => {
		if (api === undefined) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
	const scrollNext = useCallback(() => api?.scrollNext(), [api]);

	const startAutoplay = useCallback(() => api?.plugins().autoplay?.play(), [api]);
	const resetAutoplay = useCallback(() => api?.plugins().autoplay?.reset(), [api]);
	const stopAutoplay = useCallback(() => api?.plugins().autoplay?.stop(), [api]);

	const toggleAutoplay = useCallback(() => {
		const autoplayIsPlaying = api?.plugins().autoplay?.isPlaying();
		if (autoplayIsPlaying === undefined) return;
		if (autoplayIsPlaying) {
			stopAutoplay();
		} else {
			startAutoplay();
		}
	}, [api, stopAutoplay, startAutoplay]);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				stopAutoplay();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				stopAutoplay();
				scrollNext();
			}
		},
		[stopAutoplay, scrollPrev, scrollNext]
	);

	useEffect(() => {
		if (api === undefined || setApi === undefined) return;
		setApi(api);
	}, [api, setApi]);

	useEffect(() => {
		if (api === undefined) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => { api?.off("select", onSelect); };
	}, [api, onSelect]);

	useEffect(() => {
		if (api === undefined) return;

		let listeners: {
			enableAutoplay: () => void;
			disableAutoplay: () => void;
			resetAutoplay: () => void;
		} | undefined = undefined;

		function enableAutoplay() { setIsAutoplayEnabled(true); }
		function disableAutoplay() { setIsAutoplayEnabled(false); }
		function resetAutoplay() {
			if (api === undefined) return;
			const autoplayPlugin = api.plugins().autoplay as AutoplayType | undefined;
			if (autoplayPlugin === undefined) return;

			if (autoplayPlugin === undefined || !autoplayPlugin.isPlaying()) {
				disableAutoplay();
			} else {
				enableAutoplay();
			}
		}

		function clearAutoplayListeners() {
			if (api === undefined || listeners === undefined) return;
			api.off("autoplay:play", listeners.enableAutoplay);
			api.off("autoplay:stop", listeners.disableAutoplay);
			api.off("reInit", listeners.resetAutoplay);
		}

		function addAutoplayListeners() {
			if (api === undefined) return;
			clearAutoplayListeners();

			listeners = {
				enableAutoplay,
				disableAutoplay,
				resetAutoplay
			};

			api.on("autoplay:play", listeners.enableAutoplay);
			api.on("autoplay:stop", listeners.disableAutoplay);
			api.on("reInit", listeners.resetAutoplay);
		}
		addAutoplayListeners();

		api.on("reInit", addAutoplayListeners);
		return () => {
			clearAutoplayListeners();
			api.off("reInit", addAutoplayListeners);
		};
	}, [api]);

	return <CarouselContext.Provider
		value={{
			carouselRef,
			api: api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext,
			isAutoplayEnabled,
			startAutoplay,
			resetAutoplay,
			stopAutoplay,
			toggleAutoplay
		}}
	>
		<div
			onKeyDownCapture={handleKeyDown}
			className={"relative " + className}
			role="region"
			aria-roledescription="carousel"
			data-slot="carousel"
			{...props}
		>
			{children}
		</div>
	</CarouselContext.Provider>;
}

export function CarouselContent({
	className = "",
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const { carouselRef, orientation } = useCarousel();

	return <div
		ref={carouselRef}
		className="overflow-hidden"
		data-slot="carousel-content"
	>
		<div
			className={
				"flex "
				+ (orientation === "horizontal" ? "-ml-4 " : "-mt-4 flex-col ")
				+ className
			}
			{...props}
		/>
	</div>;
}

export function CarouselItem({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	const { orientation } = useCarousel();

	return <div
		role="group"
		aria-roledescription="slide"
		data-slot="carousel-item"
		className={
			"min-w-0 shrink-0 grow-0 basis-full "
			+ (orientation === "horizontal" ? "pl-4 " : "pt-4 ")
			+ className
		}
		{...props}
	/>;
}

export function CarouselPrevious({
	kind = "outline",
	size = "icon",
	className = "",
	...props
}: ButtonProps) {
	const { orientation, scrollPrev, canScrollPrev, stopAutoplay } = useCarousel();

	return <Button
		data-slot="carousel-previous"
		kind={kind}
		size={size}
		className={
			"size-8 rounded-full "
			+ (orientation === "vertical" ? "rotate-90 " : "")
			+ className
		}
		disabled={!canScrollPrev}
		onClick={() => {
			stopAutoplay();
			scrollPrev();
		}}
		{...props}
	>
		<ArrowLeft/>
		<span className="sr-only">Previous slide</span>
	</Button>;
}

export function CarouselNext({
	kind = "outline",
	size = "icon",
	className = "",
	...props
}: ButtonProps) {
	const { orientation, scrollNext, canScrollNext, stopAutoplay } = useCarousel();

	return <Button
		data-slot="carousel-next"
		kind={kind}
		size={size}
		className={
			"size-8 rounded-full "
			+ (orientation === "vertical" ? "rotate-90 " : "")
			+ className
		}
		disabled={!canScrollNext}
		onClick={() => {
			stopAutoplay();
			scrollNext();
		}}
		{...props}
	>
		<ArrowRight/>
		<span className="sr-only">Next slide</span>
	</Button>;
}

export function CarouselPause({
	kind = "outline",
	size = "icon",
	className = "",
	...props
}: ButtonProps) {
	const { api, isAutoplayEnabled, toggleAutoplay } = useCarousel();

	return <Button
		data-slot="carousel-pause"
		kind={kind}
		size={size}
		className={"size-8 rounded-full " + className}
		disabled={api?.plugins().autoplay === undefined}
		onClick={toggleAutoplay}
		{...props}
	>
		{isAutoplayEnabled ? <Pause/> : <Play/>}
		<span className="sr-only">Next slide</span>
	</Button>;
}

interface CarouselDotProps extends ButtonProps {
	snapIndex: number;
}

export function CarouselDot({
	snapIndex,
	kind = "ghost",
	size = "custom",
	className = "",
	...props
}: CarouselDotProps) {
	const { api, stopAutoplay } = useCarousel();
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		function onSelect() {
			setIsSelected(snapIndex === api?.selectedScrollSnap());
		}

		onSelect();

		api?.on("select", onSelect);
		return () => { api?.off("select", onSelect); };
	}, [api]);

	return <Button
		data-slot="carousel-dot"
		data-selected={isSelected}
		kind={kind}
		size={size}
		className={
			"size-4 rounded-full border-2 border-[var(--foreground-mid)] "
			+ "data-[selected=true]:bg-[var(--foreground-mid)] "
			+ "hover:data-[selected=true]:bg-[var(--foreground-mid)] "
			+ "hover:not-data-[selected=true]:bg-[var(--foreground-mid)] " + className
		}
		disabled={api?.plugins().autoplay === undefined}
		onClick={() => {
			stopAutoplay();
			api?.scrollTo(snapIndex);
		}}
		{...props}
	>
		<span className="sr-only">Scroll to slide {snapIndex + 1}</span>
	</Button>;
}
