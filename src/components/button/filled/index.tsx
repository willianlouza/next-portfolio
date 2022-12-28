interface IProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
export default function ButtonFilled(props: IProps) {
  return (
    <button
      className={`${props.className} bg-primary text-light
       hover:text-dark font-semibold px-6 py-2 rounded-sm border border-primary hover:bg-light hover:border-light transition-colors duration-150`}
      onClick={(e) => props.onClick(e)}
    >
      {props.text}
    </button>
  );
}
