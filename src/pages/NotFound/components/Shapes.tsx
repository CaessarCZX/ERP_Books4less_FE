const Shape = () => {
  return (
    <svg
      className="absolute top-10 sm:top-0 left-0 -z-[1] w-full"
      width="1600"
      height="753"
      viewBox="0 0 1600 753"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#52b6fe" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#915eed " stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        x="-151.65"
        width="2017"
        height="411.403"
        transform="rotate(10.6126 -151.65 0)"
        fill="url(#shapeGradient)"
      />
    </svg>
  );
};

export default Shape;
