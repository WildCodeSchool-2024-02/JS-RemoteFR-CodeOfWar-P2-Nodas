import axios from "axios";
import { useState, useEffect } from "react";
import GetDate from "./GetDate";

function FetchCategorieRecentData() {
  const { oldMonthFormattedDate, formattedDate } = GetDate();
  const [infosjeu, setInfosjeu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.rawg.io/api/games?dates=${oldMonthFormattedDate},${formattedDate}&key=528f2e0850a34934a043d35c3ece72a9`
        )
        .then((response) => {
          setInfosjeu(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    };

    fetchData();
  }, [oldMonthFormattedDate, formattedDate]);

  return { infosjeu, loading };
}

export default FetchCategorieRecentData;
