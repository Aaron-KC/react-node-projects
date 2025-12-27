import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState({})
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState('google')
  const [isLoading, setIsLoading] = useState(false)


  const handleSearch = (input) => {
    setSearch(input)
  }

  const getData = async (query, search) => {
    setIsLoading(true)
    query = query !== '/' ? query == '/news' ? '/' : query + 'search' : '/websearch'
    let bodyObject = {}

    if (query == '/imagesearch' || query == '/') {
      bodyObject = {
        text: '',
        safesearch: 'off',
        region: 'wt-wt',
        color: '',
        size: '',
        type_image: '',
        layout: '',
        max_results: 100
      }
    }
    else if (query == '/videosearch') {
      bodyObject = {
        text: '',
        safesearch: 'off',
        timelimit: '',
        duration: '',
        resolution: '',
        region: 'wt-wt',
        max_results: 50
      }
    }
    else {
      bodyObject = {
        text: '',
        safesearch: 'off',
        timelimit: '',
        region: 'wt-wt',
        max_results: 20
      }
    }
    bodyObject = { ...bodyObject, text: search }
    const url = 'https://google-api31.p.rapidapi.com' + query;
    console.log(url, bodyObject)
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'e7a440c27bmsh5c10eb8a8368966p1116c1jsn0e44bca41092',
        'x-rapidapi-host': 'google-api31.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObject)
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      localStorage.setItem(query, JSON.stringify(result))
      setData(result)
      console.log(result);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
    // const item = JSON.parse(localStorage.getItem(query))
    // setData(item)
  }
  return (
    <MyContext.Provider value={{ getData, data, darkMode, setDarkMode, search, handleSearch, isLoading, setIsLoading }}>
      {children}
    </MyContext.Provider>
  )
}