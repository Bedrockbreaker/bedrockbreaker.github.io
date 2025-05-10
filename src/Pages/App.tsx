import { BackgroundSquares } from "~/Components/BackgroundSquares";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export function App({ children }: { children: React.ReactNode }) {
	return <div className="relative flex flex-col h-full min-h-screen">
		<BackgroundSquares/>
		<Header/>
		<div className="grow mt-22">
			{children}
		</div>
		<Footer/>
	</div>;
}
