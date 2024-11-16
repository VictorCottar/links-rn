import { Text, Pressable, PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '@/styles/colors'
import { styles } from './styles'

/* 
  desestruturei as propriedades( Category(name ,icon, isSelected) ) e consigo utilizar direto a propriedade, exemplo no Text e Material.
  importei o PressableProps para poder utilizar todas as propriedades(onPress, onPressIn...) do Pressable, ->
  passei o spread operator dessa forma pego todas as propriedades disponíveis.
  a tipagem Props é igual a tudo que tem no PressableProps(onPress, onPressIn...) e mais name e icon.
  o tipo icon é tipado somente com os icons disponíveis no MaterialIcons, dessa forma evita erros.
  para sobrescrever uma estilização do Text, entre colchetes coloquei o color, então quando o isSelected for true, ->
  o color será verde(por conta de eu ter sobrescrevido ele), se não será cinza.
  quando queremos usar mais de uma estilização, colocamos entre colchetes e separamos por vírgula a nova estilização.
*/

type Props = PressableProps & {
  name: string
  isSelected: boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({ name, icon, isSelected, ...rest }: Props) {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  
  return (
    <Pressable style={styles.container}  {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, {color}]}>{name}</Text>
    </Pressable>
  )
}