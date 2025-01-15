import axios from 'axios'; 

const BASE_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace';

interface TrainStatus {
  line: string;
  status: string;
  text: string;
}

export const FetchTrainStatus = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching train status');
  }
};
