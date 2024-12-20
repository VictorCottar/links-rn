import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

type Props = {
  selected: string,
  onChange: (category: string) => void
}

/*
  é uma listagem de categorias.
  FlatList é um componente que renderiza uma lista de elementos. -> 
  Conseguimos estilizar a lista(style) e o conteúdo dela(contentContainerStyle).
  data={categories} -> recebe a lista de categorias.
  renderItem={({ item }) -> renderiza o componente Category para cada item da lista de categorias.
  horizontal -> faz com que a lista seja horizontal.
*/

export function Categories({ selected, onChange }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}