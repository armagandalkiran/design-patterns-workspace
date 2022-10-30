import React from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }
    
    return <Element {...props} data={data} />;
  };
}
