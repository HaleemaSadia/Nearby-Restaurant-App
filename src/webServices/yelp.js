import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer zIs6rfnUGWsIt4-gP8Tfsz0TBI3zyZe4kjPYxm9K6LcjgjFsQv5OyACCINPwSeksDjvXo9EVnytjGHqOq4glJtGsumsO_gT07abymKypPHiod7KI3FwUOIaX1y5sZXYx',
  },
});
