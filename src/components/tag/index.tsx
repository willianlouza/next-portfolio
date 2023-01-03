interface IProps {
  text: string;
  className?: string;
}
export default function Tag(props: IProps) {
  return (
    <div className={`${props.className} px-4 py-1 bg-neutral-700 rounded-full`}>
      <span className="text-light">{props.text}</span>
    </div>
  );
}
