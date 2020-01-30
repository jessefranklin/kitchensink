import React, { useState, useEffect, useCallback } from 'react'

function Parent() {
    const [query, setQuery] = useState('react');
  
    const fetchData = useCallback(() => {
      const url = 'https://hn.algolia.com/api/v1/search?query=' + query;
      // ... Fetch data and return it ...
    }, [query]); 
  
    return <Child fetchData={fetchData} />
  }

  function Child({ fetchData }) {
    let [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData().then(setData);
    }, [fetchData]);
  
    // ...
  }