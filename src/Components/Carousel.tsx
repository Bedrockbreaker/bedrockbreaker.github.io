import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

	const onSelect = useCallback((api: CarouselApi) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);

	const scrollNext = useCallback(() => api?.scrollNext(), [api]);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext]
	);

	useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);

	useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => { api?.off("select", onSelect); };
	}, [api, onSelect]);

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
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return <Button
		data-slot="carousel-previous"
		kind={kind}
		size={size}
		className={
			"absolute size-8 rounded-full "
			+ (orientation === "horizontal"
				? "top-1/2 -left-12 -translate-y-1/2 "
				: "-top-12 left-1/2 -translate-x-1/2 rotate-90 ")
			+ className
		}
		disabled={!canScrollPrev}
		onClick={scrollPrev}
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
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return <Button
		data-slot="carousel-next"
		kind={kind}
		size={size}
		className={"absolute size-8 rounded-full "
			+ (orientation === "horizontal"
				? "top-1/2 -right-12 -translate-y-1/2 "
				: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 ")
			+ className
		}
		disabled={!canScrollNext}
		onClick={scrollNext}
		{...props}
	>
		<ArrowRight/>
		<span className="sr-only">Next slide</span>
	</Button>;
}
