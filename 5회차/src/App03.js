import React, { useState, useCallback } from "react";

const Light = React.memo(({ room, on, toggle }) => {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "ON" : "OFF"}
    </button>
  );
})

const App = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(
    () => setKitchenOn(!kitchenOn),
    [kitchenOn]
  );
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default App