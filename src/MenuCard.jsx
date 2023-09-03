function MenuCard({ menuData }) {
  return (
    <>
      <div className="main-card--cointainer">
        {
        menuData.map((curEl) => {

          const {id, name, category, image, description} = curEl;

          return (
            <>
              <div className="card-container" key={id} >
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <spna className="card-author subtle">{category}</spna>
                    <span className="card-title">{name}</span>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="" className="card-media" />
                  <span className="card-tag subtle">Order now</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MenuCard;
