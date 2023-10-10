export const formatName = (name: string): string => {
  const formattedName = name.split(' ')

  const nameFormatted = `${formattedName[0]} ${formattedName[1]}`
  return nameFormatted
}
