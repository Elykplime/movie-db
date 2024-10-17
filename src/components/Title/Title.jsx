import "./Title.css";


const Title = ({title}) => {
  return (
    <div className="title_contain">
        {/* <div className="long_dash"></div> */}
        {/* <hr /> */}
        <h1 className="title">{title}</h1>
    </div>
  )
}

export default Title
