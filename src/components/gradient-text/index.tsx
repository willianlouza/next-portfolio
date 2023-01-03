interface IProps{
    value: string;
    textClass?: string;
}
export default function GradientText(props:IProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-rose-400 bg-clip-text py-2">
      <h1 className={`${props.textClass} text-transparent`}>
        {props.value}
      </h1>
    </div>
  );
}
