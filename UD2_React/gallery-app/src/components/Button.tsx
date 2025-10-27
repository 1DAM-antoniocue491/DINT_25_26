interface ButtonProps {
    title: string;
    callback: () => void;
}

export function Button({ title, callback }: ButtonProps) {
    return (
        <button className="rounded-md hover:bg-amber-300 bg-amber-200 px-3 py-1" onClick={callback}>{title}</button>
    )
}