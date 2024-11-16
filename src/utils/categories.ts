import { MaterialIcons } from "@expo/vector-icons"

/*
  na const categories, defino a tipagem Category como uma lista de categorias, ->
  dessa forma categories é uma lista de categorias -> Category[].
  o icon é tipado somente com os icons disponíveis no MaterialIcons, dessa forma evita erros.
  */

type Category = {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: "1", name: "Curso", icon: "school" },
  { id: "2", name: "Projeto", icon: "folder" },
  { id: "3", name: "Site", icon: "language" },
  { id: "4", name: "Artigo", icon: "newspaper" },
  { id: "5", name: "Vídeo", icon: "movie" },
  { id: "6", name: "Documentação", icon: "content-paste" }
]