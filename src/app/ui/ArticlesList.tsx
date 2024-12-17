import StyledArticle from "./StyledArticle";
import { principalArticles } from "@/app/constants";

export default function ArticlesList() {
  return (
    <section>
      {principalArticles.map((article, index) => (
        <StyledArticle {...article} key={index} />
      ))}
    </section>
  );
}
