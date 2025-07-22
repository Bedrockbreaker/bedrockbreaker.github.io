export function UL({className = "", ...props}: React.HTMLAttributes<HTMLUListElement>) {
	return <ul className={"my-6 ml-6 list-disc [&>li]:mt-2 " + className} {...props}/>;
}

export function OL({className = "", ...props}: React.HTMLAttributes<HTMLOListElement>) {
	return <ol className={"my-6 ml-6 list-decimal [&>li]:mt-2 " + className} {...props}/>;
}

export function LI({className = "", ...props}: React.HTMLAttributes<HTMLLIElement>) {
	return <li className={"leading-7 " + className} {...props}/>
}
