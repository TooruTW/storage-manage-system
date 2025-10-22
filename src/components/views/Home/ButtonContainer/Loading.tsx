const Loading = () => {
  return (
    <div className="w-fit h-15 flex items-center gap-2">
      連線中
      <span className="bg-primary rounded-full animate-bounce size-1"></span>
      <span className="bg-primary rounded-full animate-bounce size-1"></span>
      <span className="bg-primary rounded-full animate-bounce size-1"></span>
    </div>
  );
};
export default Loading;
