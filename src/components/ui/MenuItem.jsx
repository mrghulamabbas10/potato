export default function MenuItem({ item }) {
  return (
    <div className="flex gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 flex flex-col">
        <h3 className="font-urbanist text-2xl md:text-[32px] font-semibold text-black leading-tight mb-2">
          {item.name}
        </h3>
        <p className="font-urbanist text-base md:text-lg font-medium text-black leading-relaxed mb-auto">
          {item.description}
        </p>
        <p className="font-urbanist text-base md:text-lg font-medium text-black mt-2">
          {item.price}
        </p>
      </div>
    </div>
  );
}
