// import "@/styles/blog.css";

import CourseSection1 from "@/components/courses/CourseSection1";
import CourseSection2 from "@/components/courses/CourseSection2";

export const metadata = {
  title: "courses"
};

export default function AboutPage() {
  return (
    <main >
      <CourseSection1 />
      <CourseSection2 />
    </main>
  );
}
