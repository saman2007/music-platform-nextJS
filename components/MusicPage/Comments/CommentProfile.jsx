import Image from "next/image";

const CommentProfile = () => {
  return (
    <Image
      src="/my-photo.jpg"
      className="rounded-[10px]"
      layout="fill"
      objectFit="cover"
    />
  );
};

export default CommentProfile;
