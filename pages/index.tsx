import {Button} from "../components/Button/Button";
import {Header} from "../layout/Header/Header";
import {Rating} from "../components/Raiting/Rating";
import {useState} from "react";
import {withLayout} from "../layout/Layout";

function Home (): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);


