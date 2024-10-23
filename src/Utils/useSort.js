import { useState, useEffect } from 'react';

const useSort = (groupedTickets, sortingOption) => {
  const [sortedTickets, setSortedTickets] = useState([]);
  useEffect(() => {
    const sortTickets = (groupedTickets) => {
        switch (sortingOption) {
          case 'priority':
            return groupedTickets.map((group) => ({
              key: group.key,
              tickets: group.tickets.slice().sort((a, b) => b.priority - a.priority),
            }));
          case 'title':
            return groupedTickets.map((group) => ({
              key: group.key,
              tickets: group.tickets.slice().sort((a, b) => (a.title > b.title ? 1 : -1)),
            }));
          default:
            return groupedTickets;
        }
      };
    const sorted = sortTickets(groupedTickets);
    setSortedTickets(sorted);
  }, [sortingOption, groupedTickets]);

  return sortedTickets;
};

export default useSort;
