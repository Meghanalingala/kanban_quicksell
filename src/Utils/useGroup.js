import { useState, useEffect } from 'react';

const useGroup = (tickets, groupingOption) => {
  const [groupedTickets, setGroupedTickets] = useState([]);

  const groupTicketsByProperty = (tickets, property) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[property];
      const existingGroup = acc.find((group) => group.key === key);

      if (existingGroup) {
        existingGroup.tickets.push(ticket);
      } else {
        acc.push({ key, tickets: [ticket] });
      }

      return acc;
    }, []);
  };
  useEffect(() => {
    const groupTickets = () => {
      switch (groupingOption) {
        case 'status':
          return groupTicketsByProperty(tickets, 'status');
        case 'user':
          return groupTicketsByProperty(tickets, 'user');
        case 'priority':
          return  groupTicketsByProperty(tickets, 'priorityName');;
        default:
          return [];
      }
    };

    const grouped = groupTickets();
    setGroupedTickets(grouped);
  }, [groupingOption, tickets]);

  return groupedTickets;
};

export default useGroup;
