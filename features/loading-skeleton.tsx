import Image from "next/image";
export const LoadingSkeleton = () => {
  return (
    <div className="h-full flex items-center justify-center bg-card flex-1">
      <Image
        width={200}
        height={200}
        alt=""
        src="/ai-icon.png"
        quality={100}
        className="animate-bounce"
      />
    </div>
  );
};
