import { Link } from "react-router";

type CardCategoryProps = {
  id: number;
  title: string;
  imageUrl: string;
};

export function CardCategory({ id, title, imageUrl }: CardCategoryProps) {
  return (
   
    <Link to={`/products/${id}`} className="bg-white rounded-3xl shadow-md hover:shadow-2xl cursor-pointer
      flex flex-col items-center p-7">
  
      <div className="w-full flex-1 flex items-center justify-center mb-3">
        <img src={imageUrl} alt={title} className="max-h-50 w-auto object-contain"/>
      </div>
      <h3 className="text-base font-bold text-slate-900 text-center">
        {title}
      </h3>

    </Link>

  
  );
}
