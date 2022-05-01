import Link from "next/link";

const Artist = (props) => {
  const { background, color, page, radius } = props;

  return (
    <div
      className="w-[96px] h-[95px] bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundColor: color,
        borderRadius: radius,
      }}
    >
      <Link href={page}>
        <a className="w-full h-full inline-block"></a>
      </Link>
    </div>
  );
};

export default Artist;
