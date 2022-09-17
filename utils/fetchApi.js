import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


  export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3e2bcf06a8mshb0297bc5d0b5f72p1fca72jsnb0463e845db0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
  return data

  }
