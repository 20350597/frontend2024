import React from "react";

const HouseList = ({ houses }) => {
  if (!houses || houses.length === 0) {
    return <div>No houses found.</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Houses</h5>
        <div className="row">
          {houses.map((house, index) => (
            <div key={index} className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{house.name}</h5>
                  <ul className="list-group list-group-flush">
                    {house.members && house.members.map((member, idx) => (
                      <li key={idx} className="list-group-item">
                        {member.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseList;
