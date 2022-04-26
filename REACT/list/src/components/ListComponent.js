import React, { useEffect, useState } from "react";

const ListComponent = (props) => {

    const [list, setList] = useState();

    useEffect(() => {
        setList(props.list)
    }, [props.list])

  return (
    <ul>
      <>
        {list ? (
          list.map((element) => {
            return <li>{element}</li>;
          })
        ) : (
          <li>Sin elemento</li>
        )}
      </>
    </ul>
  );
};

export default ListComponent;