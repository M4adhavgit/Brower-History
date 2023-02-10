import './index.css'

const HistoryItem = props => {
  const {eachList, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachList
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="history">
      <div className="logoCon">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img"
        />
      </button>
    </li>
  )
}
export default HistoryItem
