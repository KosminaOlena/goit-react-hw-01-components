
export const Statistics = ({title, stats}) => {
    return(
        <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map(({id, label, percentage}) => {
      return(<statsItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
      </statsItem>);
    })}
  </ul>
</section>)}


