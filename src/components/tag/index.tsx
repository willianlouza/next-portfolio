interface IProps {
  text: string;
  className?: string;
}
export default function Tag(props: IProps) {
  return (
    <div className={`${props.className} px-4 py-1 bg-transparent border border-pink-500/25 rounded-full`}>
      <span className="text-light">{props.text}</span>
    </div>
  );
}
