import './cards.scss';
import { useState } from 'react';

function Card({item}) {
  const [showStatus, setShowStatus] = useState("");
  const { title, color, balance, delta } = item

  function toggleStatus() {
    setShowStatus(showStatus ? "" : "show");
  }

  return (
    <div className="col-4">
      <div className={`card data-card bdt-${color}`}>
        <div className="card-body">
          <h5 className="card-title mb-4">
            {title}
            <div class={`float-end ${showStatus} dropdown`} onClick={toggleStatus}>
              <button class={`menu-btn dropdown-toggle ${showStatus}`}>
                <i class="fa fa-ellipsis-v"></i>
              </button>
              <div x-placement="bottom-start" class={`dropdown-menu ${showStatus}`}>
                <button type="button" class="dropdown-item btn btn-primary"><i class="fa fa-plus"></i>&nbsp;Add Funds</button>
                <button type="button" class="dropdown-item btn btn-primary"><i class="fa fa-right-left"></i>&nbsp;Transfer Funds</button>
                <button type="button" class="dropdown-item btn btn-primary"><i class="fa fa-info"></i>&nbsp;Account Overview</button>
              </div>
            </div>
          </h5>
          <p className="card-text mb-0 pb-0 current-balance-label">Current Balance</p>
          <h3 className="card-text mb-0 pb-0 current-balance">{balance}</h3>
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
    <div className="row mb-3">
    {
      cardItems.map((item, index) => (
        <Card item={item} key={index} />
      ))
    }
  </div>
  )
}
