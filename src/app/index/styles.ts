import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  }, 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 32,
  },
  logo:{
    height: 32,
    width:38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600]
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
})
