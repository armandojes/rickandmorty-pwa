function parseEpisodeName (STR) {
  const [season, episode] = STR.split('E')
  return { season: season.replace('S', ''), episode }
}

export default parseEpisodeName
