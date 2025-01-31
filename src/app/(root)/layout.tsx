const LayoutRoot = async ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-zinc-900 h-screen min-h-screen">{children}</div>;
};

export default LayoutRoot;
