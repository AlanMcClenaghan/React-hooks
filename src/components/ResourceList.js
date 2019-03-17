import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {

  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data)
  }

  // If the value of resource in the array is changed, 
  // the function is called and the app updates
  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  return (
    <ul>
      {resources.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList;