interface IProps {
  value: string;
  textClass?: string;
}
export default function GradientText(props: IProps) {
  return (
    <div className="font-extrabold font-poppins bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
      <h1 className={`${props.textClass} text-transparent`}>{props.value}</h1>
    </div>
  );
}
