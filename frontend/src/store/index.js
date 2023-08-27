import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } =
  createGlobalState({
    createModal: "scale-0",
    updateModal: "scale-0",
    deleteModal: "scale-0",
    backModal: "scale-0",
    connectedAccount: "",
    projects: [],
    project: null,
    stats: null,
    backers: [],
  });

export { useGlobalState, setGlobalState, getGlobalState };
