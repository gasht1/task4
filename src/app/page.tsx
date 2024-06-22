import { Children } from "react";
interface props {
  Children: string;
}
export const Header = ({ Children }: props) => {
  return <header>{Children}</header>;
};

const page = () => {
  return (
    <div>
      <Header Children="">
        <h1>helooooo</h1>
      </Header>
      <h2>abeyppppp</h2>
    </div>
  );
};

export default page;
