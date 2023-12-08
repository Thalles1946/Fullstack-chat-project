const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target[0];

    props.onAuth({ username: value, secrete: value });
  };

  return <div className="background"></div>;
};
