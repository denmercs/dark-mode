import React, { useState } from "React";

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useLocalStorage("name", "Dennis");
};

export default useLocalStorage;
