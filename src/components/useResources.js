import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data)
  }

  // If the value of resource in the array is changed, 
  // the function is called and the app updates
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources
}

export default useResources