const ListItemComponent = (props) => {
  return (
    <>
      <li key={`${props.element}$`}>{props.element}</li>
      {props.children}
    </>
  );
};

export default ListItemComponent;
