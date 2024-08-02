// the Loader component accepts two arguments.
const Loader = ({position, width}) => {
  return (
    <div className={`loader relative flex justify-center`}>
      <div className={`${position} flex justify-center w-${width}  text-red-400`}>
        <span className="h-6 w-6 block rounded-full border-4 border-t-orange-600 animate-spin mr-1"></span>
        loading...
      </div>
    </div>
  );
};

export default Loader;
