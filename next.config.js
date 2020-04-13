module.exports = {
    exportPathMap: function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }   
    ) {   
      return {
        '/': { page: '/' }
      }
    }
}