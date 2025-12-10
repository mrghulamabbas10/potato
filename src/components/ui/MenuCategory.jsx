import MenuItem from "./MenuItem";

export default function MenuCategory({ category }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-urbanist text-3xl md:text-[33px] font-semibold text-black">
          {category.name}
        </h2>
        <div className="flex-1 mx-4 md:mx-6 border-b border-black/20"></div>
        <span className="font-urbanist text-3xl md:text-[33px] font-semibold text-black">
          {category.number}
        </span>
      </div>
      <div className="space-y-8">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
