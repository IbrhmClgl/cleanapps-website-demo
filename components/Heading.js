
function heading({ title }) {
  return (
    <div className="text-[#232940] text-[28px] xs:text-[32px] font-medium flex items-center gap-4 pt-3 pb-5 sm:py-16">
      {title}
      <div
        className="bg-[#ff4D41] h-[2px] w-[40px] translate-y-1
      "
      ></div>
    </div>
  );
}

export default heading;
