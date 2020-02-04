function parseEpisodeName (STR) {
  const [season, episode] = STR.split('E')
  console.log({ season: season.replace('S', ''), episode })
  return { season: season.replace('S', ''), episode }
}

export default parseEpisodeName
