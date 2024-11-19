import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { styles } from "./styles"

/*
  o rest é todas as propriedades que o TouchableOpacity pode receber
 */

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}