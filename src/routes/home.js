import React, { useEffect, useState } from 'react';
import Transaction from "../components/transaction";
import readData from "../utils/firebase";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readData('wallet');
        setTransactions(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {transactions.map((transaction, index) => (
        <Transaction key={transaction.id} data={transaction} />
      ))}
    </div>
  );
};

export default Home;

// import Transaction from "../components/transaction";

// const Home = () => {
//   return (
//     <div>
//       {Array.from({ length: 10 }, (_, i) => (
//         <Transaction key={i} />
//       ))}
//     </div>
//   );
// };

// export default Home;