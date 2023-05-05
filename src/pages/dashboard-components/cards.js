import { Button, Dropdown } from 'react-bootstrap';
import './cards.scss';

function DropdownToggle({children, ...props}) {
  return (
    <button className="menu-btn" {...props}><i className="fa fa-ellipsis-v"></i></button>
  )
}

function Card({item}) {
  const { title, color, balance, delta } = item
  return (
    <div className="col-4">
      <div className={`card data-card bdt-${color}`}>
        <div className="card-body">
          <h5 className="card-title mb-4">
            {title}
            <Dropdown key={item.color} className='float-end'>
              <Dropdown.Toggle className="menu-btn" id="dropdown-basic" as={DropdownToggle}>
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item as={Button}><i className="fa fa-plus"></i>&nbsp;Add Funds</Dropdown.Item>
                <Dropdown.Item as={Button}><i className="fa fa-right-left"></i>&nbsp;Transfer Funds</Dropdown.Item>
                <Dropdown.Item as={Button}><i className="fa fa-info"></i>&nbsp;Account Overview</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h5>
          <p className="card-text mb-0 pb-0">Current Balance</p>
          <h3 className="card-text mb-0 pb-0">{balance}</h3>
          <p className="card-text text-end">
            {
              delta>0 ? (
                <span className="delta delta-positve"><i className='fa fa-arrow-up'></i>&nbsp;{delta}</span>
              ) : (
                <span className="delta delta-negative"><i className='fa fa-arrow-down'></i>&nbsp;{delta}</span>
              )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export function DataCardsRow() {
  const cardItems = [
    {
      title: "Funding Account",
      color: "4d26e0",
      balance: "$90,878",
      delta: 10.0
    },
    {
      title: "Savings Account",
      color: "009947",
      balance: "290,879",
      delta: -12.0
    },
    {
      title: "Equity Account",
      color: "f79227",
      balance: "90,878.09",
      delta: 10.9
    },
  ]
  return (
    <div className="row mb-5">
    {
      cardItems.map((item, index) => (
        <Card item={item} key={index} />
      ))
    }
  </div>
  )
}
