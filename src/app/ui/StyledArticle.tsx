import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  paragraph: string;
  img: string;
  centerImg?: boolean;
  id?: string;
}

const StyledArticle: React.FC<Props> = ({
  title,
  subtitle,
  paragraph,
  img,
  centerImg,
  id,
}) => {
  return (
    <article id={id} className="flex max-h-max flex-wrap items-end mb-36">
      <div className="basis-6/12 flex-grow pr-4 md:pr-0 pl-4 mb-7">
        <h5 className="text-4xl min-w-max md:text-5xl select-none">
          {title}: <br></br>
          <strong className="text-gray-950 ">{subtitle}</strong>
        </h5>
        <p className="text-lg font-semibold mt-8 text-pretty first-letter:ml-2 text-gray-950">
          {paragraph}
        </p>
      </div>
      <div className="basis-5/12 flex-grow h-[400px] px-6 select-none">
        <Image
          alt="imagen del articulo"
          src={img}
          className={`object-cover ${
            !centerImg && "object-bottom"
          } w-full h-full rounded-md`}
          width={720}
          height={360}
        />
      </div>
    </article>
  );
};

export default StyledArticle;
