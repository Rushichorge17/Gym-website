export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':'839ac053abmsh4980f4e1574cc71p156cc0jsn89c0dc135aeb',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      


      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '839ac053abmsh4980f4e1574cc71p156cc0jsn89c0dc135aeb',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };



      export const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();
      
        return data;
      };