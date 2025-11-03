interface ButtonProps {
    title : string;
    callback : () => void;
};

export default function Button({title, callback} : ButtonProps) {
  return (
    <button className='rounded-lg bg-amber-200 py-1 px-2 
    cursor-pointer hover:bg-amber-400' onClick={callback}>
        {title}
    </button>
  )
}
