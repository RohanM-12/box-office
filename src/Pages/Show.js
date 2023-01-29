import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setErrorMSG] = useState(null);
  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setErrorMSG(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(show);

  if (isLoading) {
    return <div> The Page is Being Loaded...</div>;
  }

  if (error) {
    return <div>Faild to load the page : {error}</div>;
  }

  return <div>this is show page</div>;
}

export default Show;
