import React, { useState, useEffect } from "react";

export default (mountStatus: boolean) => {
  const [mount, setMount] = useState(mountStatus);
  useEffect(() => {
    return () => {
      setMount(false);
    };
  }, []);
  return mount;
};
