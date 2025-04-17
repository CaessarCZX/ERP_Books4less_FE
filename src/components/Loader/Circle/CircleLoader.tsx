const CircleLoader = ({ className = '' }: { className: string }) => (
  <div
    className={`flex h-28 w-28 animate-spin items-center justify-center rounded-full border-8 border-gray-300 border-t-blue-400 text-4xl text-blue-400 ${className}`}
  ></div>
);
export default CircleLoader;
