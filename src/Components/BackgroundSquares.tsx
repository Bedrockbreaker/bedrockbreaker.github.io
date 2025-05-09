import { BackgroundSquares_1 } from "~/Assets/UI/BackgroundSquares_1";
import { BackgroundSquares_2 } from "~/Assets/UI/BackgroundSquares_2";

export function BackgroundSquares() {
	const maskImage = "linear-gradient(to right, black, black calc(50% - 768px), "
		+ "transparent calc(50% - 640px), transparent calc(50% + 640px), "
		+ "black calc(50% + 768px), black)";
	const className = "absolute top-0 left-0 w-full h-full stroke-[oklch(.15_0_0)]/25 "
		+ "dark:stroke-[oklch(.85_0_0)]/25";

	return <div
		className="pointer-events-none fixed top-0 left-0 w-full h-full -z-10"
		style={{ maskImage, WebkitMaskImage: maskImage }}
	>
		<BackgroundSquares_1 className={className}/>
		<BackgroundSquares_2 className={className}/>
	</div>;
}
