import type { ISculpture } from "../types/Interface"

interface CardProps {
    data : ISculpture;
}

export default function Card({data} : CardProps) {
  return (
    <>
        <div className="flex flex-col justify-center items-center border border-gray-100 shadow-2xl p-4 rounded-xl w-fit">
            <h2 className="text-2xl pb-2">{data.name}</h2>
            <img src={data.url} alt={data.alt} className="rounded-2xl" />
            <p className="pt-2 max-w-xs">{data.description}</p>
        </div>
    </>
  )
}
