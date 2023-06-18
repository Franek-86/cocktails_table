import Row from "../components/Row";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
const Cocktails = () => {
  const { cocktails, loading, fetchDrinks } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  const test = cocktails[0];

  const test2 = Object.keys(test);

  return (
    <div>
      <section className='section'>
        <h2 className='section-title'>cocktail list</h2>

        <article className='table-container'>
          <table className='table'>
            <thead className='thead'>
              <tr className='trHead'>
                {test2.map((item, index) => {
                  return (
                    <th className='th' key={index}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className='tbody'>
              {cocktails.map((item, index) => {
                return <Row key={item.id} {...item} />;
              })}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default Cocktails;
