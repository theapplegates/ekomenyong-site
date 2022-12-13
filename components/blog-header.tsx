import KommyLink from "./a";
import Container from "./container";
import KommyImage from "./image";
interface IBlogHeader {
  title: string;
  date: string;
  readingTime: string;
  imgSrc: string;
  imgAlt: string;
  authorName: string;
  coverImageAttributionText: string;
  coverImageAttributionLink: string;
}

export default function BlogHeader({
  title,
  authorName,
  coverImageAttributionText,
  coverImageAttributionLink,
  date,
  readingTime,
  imgSrc,
  imgAlt,
}: IBlogHeader) {
  return (
    <Container className="mt-32 mb-14">
      <div className="animate-in slide-in-from-left duration-1500">
        <div className="mt-2 space-x-2 text-base italic tracking-wide">
          <span> Published: {date}</span>
          <span>&mdash;</span>
          <span>{readingTime}</span>
        </div>
        <h1 className="mb-4 text-5xl font-semibold md:text-7xl">{title}</h1>
        <div className="flex flex-row justify-start text-lg md:text-xl">
          <span>
            Written by: {authorName} &mdash; Cover Image by:{" "}
            <KommyLink
              dottedLine
              animatedUnderline
              href={coverImageAttributionLink}
            >
              {coverImageAttributionText}
            </KommyLink>
          </span>
        </div>
      </div>
      <KommyImage
        useSkeleton
        src={imgSrc}
        width={1200}
        height={630}
        alt={imgAlt}
        className="my-8 h-[280px] w-full rounded-md border border-gray-300 object-cover object-center animate-in fade-in duration-2000 md:h-[500px]"
      />
    </Container>
  );
}