import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item

  return (
    <ul className="card-container">
      <li className={`${className}card-container`}>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="image-sizing" alt={title} />
      </li>
    </ul>
  )
}
export default CardItem
