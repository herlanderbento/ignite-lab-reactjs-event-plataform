import { gql, useQuery } from "@apollo/client";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useParams } from "react-router-dom";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useQuery(GET_LESSONS_QUERY);

  const lessonGetSlug = data?.lessons.map(
    (lesson: { slug: string | undefined }) => lesson.slug
  );

  let lessonSlug = lessonGetSlug && lessonGetSlug[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <Video lessonSlug={lessonSlug} />}
        <Sidebar />
      </main>
    </div>
  );
}
