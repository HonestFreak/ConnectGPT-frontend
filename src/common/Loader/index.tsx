const Loader = () => {
  return (
    <div className='flex bg-meta-4 space-x-2 justify-center items-center h-screen'>
          <div className='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]'>
            🔴
          </div>
          <div className='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]'>
            🟡
          </div>
          <div className='h-8 w-8 rounded-full animate-bounce'>
            🔵
        </div>
    </div>
  );
};

export default Loader;
