import ArticleImage from "../assets/images/illustration-article.svg";
import AvatarImage from "../assets/images/image-avatar.webp";
const Card = () => {
  return (
    <div className="bg-white p-3 md:p-5 rounded-2xl max-w-[400px] border border-gray-950 flex flex-col items-start gap-4">
      <img src={ArticleImage} className="rounded-xl w-full object-cover" />
      <div className="flex flex-col gap-2">
        <div className="bg-yellow rounded-lg px-3 py-1 w-auto font-bold">
          <p>Learning</p>
        </div>
        <p className="font-medium">Published 21 Dec 2023</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl md:text-2xl">
          HTML & CSS Fundamentals
        </h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <img
          src={AvatarImage}
          alt="User avatar"
          className="rounded-full w-10 h-10 object-cover"
        />
        <p className="font-bold">Padmaja</p>
      </div>
    </div>
  );
};

export default Card;
