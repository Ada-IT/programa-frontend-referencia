import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';

export default function Root({ children }) {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
          links[i].target = '_blank';
        }
      }
    });
  }, []);
  return <>{children}</>;
}
