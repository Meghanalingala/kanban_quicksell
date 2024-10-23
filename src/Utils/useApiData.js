import { useState, useEffect } from "react";

const useApiData = () => {
  const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const userMap = {};
        result.users.forEach((user) => {
          userMap[user.id] = {
            name: user.name,
            available: user.available,
          };
        });
        const combinedData = result.tickets.map((ticket) => ({
          id: ticket.id,
          title: ticket.title,
          tag: ticket.tag,
          userId: ticket.userId,
          status: ticket.status,
          priority: ticket.priority,
          priorityName: mapPriorityToName(ticket.priority),
          user: userMap[ticket.userId].name,
          userAvailable: userMap[ticket.userId].available,
        }));
        setData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const mapPriorityToName = (priorityLevel) => {
    switch (priorityLevel) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      default:
        return "No priority";
    }
  };

  
  return data;
};

export default useApiData;
