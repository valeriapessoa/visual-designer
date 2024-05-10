export interface IPost {
  id: number;
  data: string;
  description: string;
  image: string | string[];
  title: string;
  texts: string[]
}

export default interface BlogRightSideProps {
      posts: IPost[];
}