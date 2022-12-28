interface IProps {
  text: string;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonOutlined(props: IProps) {
  return (
    <button
      className={`${props.className} bg-transparent border border-primary text-primary font-semibold px-6 py-2 rounded-sm hover:bg-light hover:border-light hover:text-dark transition-colors duration-150`}
      onClick={(e) => props.onClick(e)}
    >
      {props.text}
    </button>
  );
}
