import './cards.scss';
import { useEffect, useState } from 'react';
import useBreakpoint from "../../hooks/user-breakpoint";
import { Next } from 'react-bootstrap/esm/PageItem';

function Card({item}) {
  const [showStatus, setShowStatus] = useState("");
  const { title, color, balance, delta } = item

  function toggleStatus() {
    setShowStatus(showStatus ? "" : "show");
  }

  return (
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
  )
}

export function DataCardsRow() {
  const size = useBreakpoint()
  const [currentCard, setCurrentCard] = useState(0)
  const isSmall = (["xs", "sm"]).includes(size)

  useEffect(() => {
    if (isSmall) {
      const interval = setInterval(() => {
        setCurrentCard(currentCard => currentCard === 2 ? 0 : currentCard + 1)
      }, 3000)
      return () => clearInterval(interval)
    }
  })

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
        <div className={`col-md-4 col-12 mx-auto mb-sm-3 ${(isSmall && index !== currentCard) && "d-none"}`}>
          <Card item={item} key={index} />
        </div>
      ))
    }
  {
    isSmall && (
      <div className="col-12 pt-3">
        <div className="d-flex justify-content-center">
          <span className={`dot ${currentCard === 0 ? "active" : ""}`}></span>
          <span className={`dot ${currentCard === 1 ? "active" : ""}`}></span>
          <span className={`dot ${currentCard === 2 ? "active" : ""}`}></span>
        </div>
      </div>
    )
  }
  </div>

  )
}
