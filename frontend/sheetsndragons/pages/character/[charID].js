import CharacterPage from "../../components/CharacterPage";
import { charactersList } from "../../helpes/mockData";
import api from "../../api";

export default CharacterPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { charID: "1" } }, { params: { charID: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { charID } = ctx.params;
  let char = charactersList.filter((c) => c.id == charID)[0];

  // const {data} = await api().characters.get(charID)
  // let char = data.char

  return {
    props: { character: char },
  };
}
