interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Cell = ({ className, onClick, children, ...props }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`sm:h-[140px] sm:w-[140px] h-[60px] w-[60px] rounded-2xl bg-black relative cursor-pointer disabled:cursor-default ${className}`}
      {...props}
    >
      <div className="rounded-2xl sm:border-8 border-4 border-black bg-[#C9F9FC] absolute w-full h-full -top-[4px] left-[4px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center">{children}</div>
        </div>
      </div>
    </button>
  );
};

export default Cell;
