import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "../../store";
import { loadRequest } from "../../store/ducks/repositories/actions";

export default function RepositoryList() {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    function loadRepositories() {
      dispatch(loadRequest());
    }
    loadRepositories();
  }, [dispatch]);

  return (
    <>
      <h1>LIST</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}
