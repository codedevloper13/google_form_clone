const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export { Wrapper };
