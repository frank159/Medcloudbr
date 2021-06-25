  export const goToPatientFeed = (history) => {
    history.replace("/users");
  };

  export const goToRegisterPage = (history) => {
    history.replace("/");
  };

  export const goPerfil = (history, id) => {
    history.push(`/user/${id}`);
  };
  
  export const goToPreviousPage = (history) => {
    history.goBack();
  };