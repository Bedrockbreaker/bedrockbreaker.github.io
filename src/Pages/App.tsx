import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export function App({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col h-full min-h-screen">
		<Header/>
		<div className="grow">
			{children}
		</div>
		<Footer/>
	</div>;
}
